import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  featherChevronLeft,
  featherChevronRight,
} from '@ng-icons/feather-icons';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule, RouterLink, NgIconComponent],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
  viewProviders: [provideIcons({ featherChevronLeft, featherChevronRight })],
})
export class Pagination {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  currentPage = input.required<number>();
  totalItems = input.required<number>();
  pageSize = input.required<number>();

  protected readonly totalPages = computed(() => {
    return Math.ceil(this.totalItems() / this.pageSize());
  });

  protected readonly hasPrevious = computed(() => {
    return this.currentPage() > 1;
  });

  protected readonly hasNext = computed(() => {
    return this.currentPage() < this.totalPages();
  });

  goToPage(page: number): void {
    const clampedPage = Math.min(Math.max(page, 1), this.totalPages());
    const isAlreadyOnPage = clampedPage === this.currentPage();
    if (isAlreadyOnPage) {
      return;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: clampedPage },
      queryParamsHandling: 'merge',
    });
  }

  goToInputPage(value: string, input: HTMLInputElement): void {
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed)) {
      this.goToPage(parsed);
    }
    input.value = String(this.currentPage());
  }

  goToPrevious(): void {
    if (this.hasPrevious()) {
      this.goToPage(this.currentPage() - 1);
    }
  }

  goToNext(): void {
    if (this.hasNext()) {
      this.goToPage(this.currentPage() + 1);
    }
  }

  getPageQueryParams(page: number): Record<string, string> {
    return { page: page.toString() };
  }

  getPreviousPageQueryParams(): Record<string, string> {
    return this.getPageQueryParams(this.currentPage() - 1);
  }

  getNextPageQueryParams(): Record<string, string> {
    return this.getPageQueryParams(this.currentPage() + 1);
  }
}
