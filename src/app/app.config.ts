import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: LOCALE_ID,
      // useValue: 'es',
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale,
    },
  ],
};
