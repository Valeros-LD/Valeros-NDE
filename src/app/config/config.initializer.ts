import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from './config-page/config.service';
import { ValerosConfig } from './schema/valeros-config.schema';

export async function initializeAppConfig(): Promise<void> {
  const configService = inject(ConfigService);
  const http = inject(HttpClient);
  const router = inject(Router);
  const configPath = '/config/valeros.config.json';

  try {
    const config = await firstValueFrom(http.get<ValerosConfig>(configPath));
    configService.initialize(config);
  } catch (err: unknown) {
    const message = `Configuratie kon niet worden geladen<br/><pre><small>${(err as Error).message}</small></pre>`;
    configService.setLoadError(message);
    await router.navigate(['/config-error'], { replaceUrl: true });
  }
}
