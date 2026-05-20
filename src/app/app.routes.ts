import { Route } from '@angular/router';
import { DetailsComponent } from './features/details/components/details-page/details.component';
import { SearchPageComponent } from './features/search/components/search-page/search-page.component';
import { ConfigPageComponent } from './features/config/config-page.component';

export const appRoutes: Route[] = [
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'config',
    component: ConfigPageComponent,
  },
  {
    path: '**',
    component: SearchPageComponent,
  },
];
