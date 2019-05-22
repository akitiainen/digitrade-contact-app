import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {

  }

  get(): Contact[] {
    console.log(this.contactHttpService.get());
    return [];
  }
}
