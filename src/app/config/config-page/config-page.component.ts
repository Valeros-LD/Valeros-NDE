import { Component } from '@angular/core';
import { FacetsConfig } from './facets-config/facets-config.component';
import { ViewsConfigComponent } from './views-config/views-config.component';

@Component({
  selector: 'app-config-page',
  imports: [FacetsConfig, ViewsConfigComponent],
  templateUrl: './config-page.component.html',
})
export class ConfigPageComponent {}
