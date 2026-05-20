import { Component, inject } from '@angular/core';
import { ConfigService } from '../../../config/config.service';
import { FacetsService } from '../../search/components/facets/facets.service';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-views-config',
  imports: [NgIcon],
  templateUrl: './views-config.component.html',
  styleUrl: './views-config.component.scss',
})
export class ViewsConfig {}
