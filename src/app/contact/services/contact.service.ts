import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Katto', 'Kassinen', '0501231234'),
      new Contact('Pikku', 'Veli', '100500'),
      new Contact('Iids', 'Beibs', '<3<3<3<3<3')
    ];

    this.contacts.push(new Contact('Nalle', 'Puh', 'Hunajata'));
  }

  get(): Contact[] {
    return this.contacts;
  }
}
