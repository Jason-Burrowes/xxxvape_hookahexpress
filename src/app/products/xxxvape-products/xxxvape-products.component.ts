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
  selector: 'app-xxxvape-products',
  templateUrl: './xxxvape-products.component.html',
  styleUrls: ['./xxxvape-products.component.css']
})
export class XxxvapeProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Premium Vape Starter Kit',
      description: 'Complete starter kit with everything you need to begin vaping',
      price: 79.99,
      image: '🎁'
    },
    {
      id: 2,
      name: 'Advanced Vape Mod',
      description: 'High-performance vape mod with temperature control',
      price: 129.99,
      image: '⚡'
    },
    {
      id: 3,
      name: 'E-Liquid Collection',
      description: 'Assorted premium e-liquid flavors (6-pack)',
      price: 49.99,
      image: '💧'
    },
    {
      id: 4,
      name: 'Replacement Coils',
      description: 'High-quality replacement coils (5-pack)',
      price: 19.99,
      image: '🔧'
    },
    {
      id: 5,
      name: 'Portable Pod System',
      description: 'Compact and convenient pod system for on-the-go vaping',
      price: 39.99,
      image: '📱'
    },
    {
      id: 6,
      name: 'Premium Drip Tips',
      description: 'Stylish drip tips in various colors and materials',
      price: 14.99,
      image: '💎'
    }
  ];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.setSelectedBrand('xxxvape');
  }
}
