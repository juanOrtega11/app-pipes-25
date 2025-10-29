import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
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
}
