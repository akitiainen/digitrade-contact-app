import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/contacts';
  }

  get(): Observable<Contact[]> {
    return this.httpClient
      .get<Contact[]>(this.url)
      .pipe(
        map(contacts => {
          return contacts as Contact[];
        })
      );

  }

  getById(id): Observable<Contact> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }

  delete(contact): Observable<any> {
    return this.httpClient.delete(this.url + '/' + contact.id);
  }

  post(contact): Observable<Contact> {
    return this.httpClient.post(this.url, contact).pipe(map(response => {
      return response as Contact;
    }));
  }
}
