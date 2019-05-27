import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarOptions} from '../../UI/toolbar/toolbar-options';
import {ToolbarService} from '../../UI/toolbar/toolbar.service';
import {ToolbarAction} from '../../UI/toolbar/toolbar-action';

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactId: any;

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;

    let toolbarActions: ToolbarAction[];

    if (isNaN(this.contactId)) {
      toolbarActions = [];
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
      });

    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));

  }

  onEdit() {
    console.log('TODO: activate/deactivate edit mode');
  }

}
