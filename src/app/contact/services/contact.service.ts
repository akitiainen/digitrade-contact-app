import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Aki', 'Tiainen', '0501231234', 'aki.tiainen@student.saimia.fi', 'Kannelkatu 10 a 8', '53100', 'Lappeenranta'),
      new Contact('Iida', 'Laukkanen', '0451229755', 'iida.laukkanen@student.saimia.fi', 'Teknologiapuistonkatu 4 D 42', '53850', 'Lappeenranta'),
      new Contact('Iids', 'Beibs', '<3<3<3<3<3', 'iids.beibs@loveu.com', 'Pussochkramkatu 1', '<3<3<3', 'Lovecity')
    ];

    this.contacts.push(new Contact('Nalle', 'Puh', 'Hunajata'));
  }

  get(): Contact[] {
    return this.contacts;
  }
}
