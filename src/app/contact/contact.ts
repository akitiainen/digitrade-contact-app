export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  streetAddress: string;
  postalCode: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, address?: string, postalCode?: string, city?: string, id?: string,) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phone;
    this.emailAddress = email;
    this.streetAddress = address;
    this.postalCode = postalCode;
    this.city = city;
  }
}
