import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from './config-page/config.service';
import { ValerosConfig } from './schema/valeros-config.schema';

export async function initializeAppConfig(): Promise<void> {
  const configService = inject(ConfigService);
  const http = inject(HttpClient);

  const config = await firstValueFrom(
    http.get<ValerosConfig>('/config/valeros.config.json'),
  );

  configService.initialize(config);
}
