import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localeNl from '@angular/common/locales/nl';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';
import { initializeAppConfig } from './config/config.initializer';
import { appRoutes } from './routing/app.routes';
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
