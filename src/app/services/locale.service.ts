import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  public currentLocale = signal<AvailableLocale>('fr');
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedLocale =
        (localStorage.getItem('locale') as AvailableLocale) ?? 'es';

      this.currentLocale.set(storedLocale);
    }
  }
  get getLocale() {
    return this.currentLocale();
  }
  changeLocale(locale: AvailableLocale) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('locale', locale);
      this.currentLocale.set(locale);
      window.location.reload();
    }
    // localStorage.setItem('locale', locale);
    // this.currentLocale.set(locale);
    // window.location.reload();
  }
}
