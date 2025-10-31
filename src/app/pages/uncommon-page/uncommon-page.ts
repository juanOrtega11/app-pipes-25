import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Laura Gómez',
  gender: 'female',
  age: 28,
  address: 'Av. Insurgentes Sur 1450, Ciudad de México, México',
};

const client2 = {
  name: 'Carlos Ramírez',
  gender: 'male',
  age: 34,
  address: 'Calle 12 #45, Colonia Centro, Guadalajara, Jalisco, México',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
}
