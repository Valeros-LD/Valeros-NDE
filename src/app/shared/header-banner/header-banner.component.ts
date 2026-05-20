import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherHelpCircle, featherSettings } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherSettings })],
})
export class HeaderBannerComponent {
  private router = inject(Router);

  goToHome(): void {
    this.router.navigate(['/search'], {
      queryParams: {},
    });
  }

  goToConfig(): void {
    this.router.navigate(['/config'], {
      queryParams: {},
    });
  }
}
