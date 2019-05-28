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

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }


  ngOnInit() {
    this.contactService.get().subscribe((response => {
      this.contacts = response;
    }));

    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contacts App', []));
  }

  onContactSelected(contact) {
    this.router.navigate(['/contacts/' + contact.id], {skipLocationChange: true});
  }

  onCreateNew() {
    this.router.navigate(['/contacts/new']);
  }
}
