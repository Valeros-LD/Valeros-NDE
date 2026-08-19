import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { LoadingSpinnerComponent } from '../../../../ui/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-autocomplete-suggestions',
  imports: [CommonModule, LoadingSpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './autocomplete-suggestions.component.html',
})
export class AutocompleteSuggestionsComponent {
  id = input.required<string>();
  suggestions = input<string[]>([]);
  loading = input<boolean>(false);
  activeIndex = input<number>(-1);

  selectSuggestion = output<string>();
  hoverIndex = output<number>();
}
