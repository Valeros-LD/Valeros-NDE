import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  signal,
  viewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';
import { LoadingSpinnerComponent } from '../../../ui/loading-spinner/loading-spinner.component';
import { SearchStore } from '../../state/search.store';
import { AutocompleteDropdownComponent } from './autocomplete-dropdown/autocomplete-dropdown.component';

@Component({
  selector: 'app-search-bar',
  imports: [
    CommonModule,
    FormsModule,
    AutocompleteDropdownComponent,
    NgIcon,
    LoadingSpinnerComponent,
  ],
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  viewProviders: [provideIcons({ featherSearch })],
})
export class SearchBarComponent {
  store = inject(SearchStore);
  private router = inject(Router);

  autocomplete = viewChild<AutocompleteDropdownComponent>('autocomplete');

  protected readonly placeholder = signal(
    (() => {
      const placeholderExamples = ['mijnbouw', 'bloem', 'brief', 'instrument'];
      const randomIndex = Math.floor(
        Math.random() * placeholderExamples.length,
      );
      return `Bijv. '${placeholderExamples[randomIndex]}'`;
    })(),
  );

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private skipFirstDebouncedSearch = true;
  private enableDebounce = false;

  protected readonly searchInputValue = signal('');

  constructor() {
    effect(() => {
      this.searchInputValue.set(this.store.searchTerm());
    });

    effect(() => {
      if (!this.enableDebounce) {
        return;
      }

      const searchTerm = this.searchInputValue();

      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }

      this.debounceTimer = setTimeout(() => {
        if (this.skipFirstDebouncedSearch) {
          this.skipFirstDebouncedSearch = false;
          return;
        }
        this.performSearch(searchTerm);
      }, 300);
    });
  }

  onSearchTermChange(value: string): void {
    this.searchInputValue.set(value);
  }

  private performSearch(searchTerm: string): void {
    this.router.navigate(['/search'], {
      queryParams: { q: searchTerm || undefined, filters: undefined, page: 1 },
      queryParamsHandling: 'merge',
    });
  }

  onSearch(): void {
    this.autocomplete()?.hideAndSuppress();
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.performSearch(this.searchInputValue());
  }

  onSuggestionSelect(suggestion: string): void {
    this.searchInputValue.set(suggestion);
    this.autocomplete()?.hideAndSuppress();
    this.performSearch(suggestion);
  }

  onInputFocus(): void {
    this.autocomplete()?.showCachedResults();
  }

  onInputBlur(): void {
    this.autocomplete()?.hide();
  }
}
