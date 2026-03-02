import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router,
    private brandService: BrandService
  ) { }

  ngOnInit(): void {
  }

  selectBrand(brand: 'xxxvape' | 'hookahexpress'): void {
    this.brandService.setSelectedBrand(brand);
    if (brand === 'xxxvape') {
      this.router.navigate(['/xxxvape/products']);
    } else {
      this.router.navigate(['/hookahexpress/products']);
    }
  }
}
