import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  localeService = inject(LocaleService);
  // TODO: traer current local y mostrar en span del html

  lower = signal('JUAN');
  upper = signal('juan');
  full = signal('JuAn dE diOS');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      // console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });
  changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }

  actualLocale() {
    this.localeService.currentLocale();
    console.log(this.actualLocale);
  }
}
