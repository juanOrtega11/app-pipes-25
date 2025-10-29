import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-default-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './default-page.html',
})
export default class DefaultPage {
  totalSells = signal(23_345_234.5567);
  percent = signal(0.4856);
}
