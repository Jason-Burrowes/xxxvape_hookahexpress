import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xxxvape-hookahexpress';
  showLayout = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check initial route
    this.showLayout = !this.router.url.includes('age-verification');
    
    // Subscribe to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showLayout = !event.url.includes('age-verification');
      });
  }
}
