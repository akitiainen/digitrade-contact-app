import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService} from '../../UI/toolbar/toolbar.service';
import {ToolbarOptions} from '../../UI/toolbar/toolbar-options';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
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

    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contacts App'));
  }

}
