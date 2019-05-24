import {post} from 'selenium-webdriver/http';

export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;

  constructor(id?: string, firstName?: string, lastName?: string, phone?: string, email?: string, address?: string, postalCode?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
  }
}
