import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection
} from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideNgxMask } from 'ngx-mask';

import { LucideAngularModule, Copy } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideRouter(routes),

    provideNgxMask(),

    importProvidersFrom(
      LucideAngularModule.pick({ Copy })
    )
  ]
};
