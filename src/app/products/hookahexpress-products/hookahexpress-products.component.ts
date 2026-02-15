import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-hookahexpress-products',
  templateUrl: './hookahexpress-products.component.html',
  styleUrls: ['./hookahexpress-products.component.css']
})
export class HookahexpressProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Traditional Hookah Set',
      description: 'Authentic traditional hookah with premium glass base',
      price: 149.99,
      image: '🏺'
    },
    {
      id: 2,
      name: 'Modern Glass Hookah',
      description: 'Contemporary design with LED lighting',
      price: 199.99,
      image: '💎'
    },
    {
      id: 3,
      name: 'Premium Tobacco Collection',
      description: 'Assorted premium tobacco flavors (10-pack)',
      price: 89.99,
      image: '🌿'
    },
    {
      id: 4,
      name: 'Hookah Accessories Kit',
      description: 'Complete accessories including hoses, tongs, and foil',
      price: 39.99,
      image: '🔧'
    },
    {
      id: 5,
      name: 'Charcoal Tablets',
      description: 'Quick-light charcoal tablets (100-pack)',
      price: 24.99,
      image: '🔥'
    },
    {
      id: 6,
      name: 'Premium Bowl Set',
      description: 'Handcrafted ceramic bowls (3-pack)',
      price: 44.99,
      image: '🥣'
    }
  ];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.setSelectedBrand('hookahexpress');
  }
}
