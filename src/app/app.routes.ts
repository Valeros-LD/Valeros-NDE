import { Route } from '@angular/router';
import { DetailsComponent } from './features/details/components/details-page/details.component';
import { SearchPageComponent } from './features/search/components/search-page/search-page.component';
import { ConfigPageComponent } from './features/config/config-page.component';
import { detailsRouteMatcher } from './details-route.matcher';

export const appRoutes: Route[] = [
  {
    path: 'config',
    component: ConfigPageComponent,
  },
  {
    matcher: detailsRouteMatcher,
    component: DetailsComponent,
  },
  {
    path: '**',
    component: SearchPageComponent,
  },
];
