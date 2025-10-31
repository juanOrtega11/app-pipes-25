import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroCreatorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('juan');

  upperCase = signal(true);
  heroes = signal(heroes);
}
