import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'dtca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  onSelect(): void {
    this.router.navigate(['/contacts']);
  }
}
