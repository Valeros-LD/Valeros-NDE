import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigPanelComponent } from './config/config-panel/config-panel.component';

@Component({
  imports: [RouterModule, ConfigPanelComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {}
