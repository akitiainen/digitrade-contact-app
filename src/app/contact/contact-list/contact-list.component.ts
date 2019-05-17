import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts = [
      new Contact('Katto', 'Kassinen', '0501231234'),
      new Contact('Pikku', 'Veli', '100500'),
      new Contact('Iids', 'Beibs', '<3<3<3<3<3')
    ];
    console.log(this.contacts);
  }

}
