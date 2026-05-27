import { Component } from '@angular/core';
import { HeaderBannerComponent } from '../../ui/header-banner/header-banner.component';
import { FacetsConfig } from './facets-config/facets-config.component';
import { ViewsConfig } from './views-config/views-config.component';

@Component({
  selector: 'app-config-page',
  imports: [HeaderBannerComponent, FacetsConfig, ViewsConfig],
  templateUrl: './config-page.component.html',
})
export class ConfigPageComponent {}
