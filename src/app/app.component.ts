import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xxxvape-hookahexpress';
  showLayout = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide header and footer on age verification page
        this.showLayout = !event.url.includes('age-verification');
      }
    });
  }
}
