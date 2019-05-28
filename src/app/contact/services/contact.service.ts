import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {

  }

  get(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  deleteContact(contact): Observable<any> {
    return this.contactHttpService.delete(contact);
  }

  createContact(contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }

  updateContact(contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }
}
