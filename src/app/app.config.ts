import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  LOCALE_ID,
  provideAppInitializer,
} from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { appRoutes } from './routing/app.routes';
import { initializeAppConfig } from './config/config.initializer';
import { ValerosUrlSerializer } from './routing/valeros-url-serializer';

registerLocaleData(localeNl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    { provide: UrlSerializer, useClass: ValerosUrlSerializer },
    provideAppInitializer(initializeAppConfig),
  ],
};
