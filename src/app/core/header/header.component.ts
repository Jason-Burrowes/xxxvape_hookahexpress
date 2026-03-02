import { Component, OnInit } from '@angular/core';
import { BrandService, Brand } from '../../services/brand.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedBrand: Brand = null;
  isLoggedIn = false;
  currentUser: string | null = null;
  showLoginModal = false;
  username = '';
  password = '';

  constructor(
    private brandService: BrandService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.brandService.selectedBrand$.subscribe(brand => {
      this.selectedBrand = brand;
    });

    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      this.currentUser = this.authService.getCurrentUser();
    });
  }

  openLoginModal(): void {
    this.showLoginModal = true;
  }

  closeLoginModal(): void {
    this.showLoginModal = false;
    this.username = '';
    this.password = '';
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.closeLoginModal();
    } else {
      alert('Please enter valid credentials');
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
