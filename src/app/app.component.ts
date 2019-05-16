import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContactsWebApp';
  message = '';

  onButtonClick() {
    console.log('Moikka');
    this.message = 'Termos!';
  }
}
