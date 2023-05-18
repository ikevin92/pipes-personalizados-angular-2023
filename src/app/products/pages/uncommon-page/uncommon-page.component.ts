import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Kevin';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Maria';
    this.gender = 'female';
  }

  // i18nPLural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Kevin', 'Fernando'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Kevin',
    age: 30,
    address: 'Cali, Colombia',
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
      console.log('tenemos data en la promesa');
      this.person.name = 'otro nombre';
    }, 3500);
  });
}
