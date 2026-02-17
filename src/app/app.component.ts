import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const gtag: (...args: any[]) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event) => {
        const url = event.urlAfterRedirects || event.url;
        this.showLayout = !url.includes('age-verification');
        if (typeof gtag === 'function') {
          gtag('config', 'G-XXXXXXXXXX', {
            page_path: url,
          });
        }
      });
  }
}
