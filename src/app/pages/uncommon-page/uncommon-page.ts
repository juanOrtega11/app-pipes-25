import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  KeyValuePipe,
  SlicePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

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
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    KeyValuePipe,
    AsyncPipe,
  ],
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

  // i18n plural
  clientsMap = signal({
    '=0': 'no tenemos nungún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Juan',
    'Jesus',
    'Eduardo',
    'José',
    'Felipe',
    'Antionio',
    'Arnulfo',
  ]);
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
  profile = {
    name: 'Juan',
    age: 26,
  };
  //Async pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('promesa ended');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    // map((value) => value + 1),
    tap((value) => console.log('tap', value))
  );
}
