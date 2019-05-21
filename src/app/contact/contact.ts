import {post} from 'selenium-webdriver/http';

export class Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, address?: string, postalCode?: string, city?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.postalCode = postalCode;
    this.city = city;
  }
}
