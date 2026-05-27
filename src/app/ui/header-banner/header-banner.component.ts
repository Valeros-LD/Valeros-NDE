import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  imports: [NgIcon],
})
export class HeaderBannerComponent {
  private router = inject(Router);

  goToHome(): void {
    this.router.navigate(['/search'], {
      queryParams: {},
    });
  }
}
