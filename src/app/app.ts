import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from './config/config-page/config.service';
import { ConfigPanelComponent } from './config/config-panel/config-panel.component';
import { ErrorAlertComponent } from './ui/error-alert/error-alert.component';

@Component({
  imports: [RouterModule, ConfigPanelComponent, ErrorAlertComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.scss',
})
export class App {
  protected readonly configLoadError = inject(ConfigService).loadError;
}
