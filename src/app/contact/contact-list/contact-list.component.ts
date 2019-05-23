import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = [];
    this.selectedContactName = '';
  }

  onContactSelected(contact): void {
    // this.selectedContactName = contact.firstName + ' ' + contact.lastName;
    this.router.navigate(['/contacts/' + contact.id]);
  }

  ngOnInit() {
    this.contactService.get().subscribe((response => {
      this.contacts = response;
    }));
  }

}
