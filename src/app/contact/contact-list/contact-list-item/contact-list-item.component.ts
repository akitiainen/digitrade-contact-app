import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../contact';

@Component({
  selector: 'dtca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;
  @Output() selected: EventEmitter<Contact>;

  constructor() {
    this.selected = new EventEmitter<Contact>();
  }

  ngOnInit() {
  }

  onSelect(contact: Contact) {
    this.selected.emit(contact);
  }
}
