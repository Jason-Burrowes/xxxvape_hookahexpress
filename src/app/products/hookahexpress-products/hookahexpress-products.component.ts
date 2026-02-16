import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
}

type ProductCategory = 'Small' | 'Medium' | 'Large' | 'accessories';
type FilterOption = 'all' | ProductCategory;

@Component({
  selector: 'app-hookahexpress-products',
  templateUrl: './hookahexpress-products.component.html',
  styleUrls: ['./hookahexpress-products.component.css'],
})
export class HookahexpressProductsComponent implements OnInit {
  selectedFilter: FilterOption = 'all';

  filterOptions: Array<{ value: FilterOption; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'Small', label: 'Small' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
    { value: 'accessories', label: 'Accessories' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Small Hookah Set',
      description: 'Authentic traditional hookah with premium glass base',
      price: 6000.0,
      image: 'assets/Images/Hookah/smallhookah.jpeg',
      category: 'Small',
    },
    {
      id: 2,
      name: 'Medium Hookah Set',
      description: 'Contemporary design with LED lighting',
      price: 12000.0,
      image: 'assets/Images/Hookah/mediumhookah.jpeg',
      category: 'Medium',
    },
    {
      id: 3,
      name: 'Large Hookah Set',
      description: 'Assorted premium tobacco flavors (10-pack)',
      price: 18000.0,
      image: 'assets/Images/jamaican_vibes.jpg',
      category: 'Large',
    },
    {
      id: 4,
      name: 'Hookah Accessories Kit',
      description: 'Complete accessories including hoses, tongs, and foil',
      price: 3000.0,
      image:
        'assets/Images/Leonardo_Phoenix_10_A_whimsical_still_life_of_plump_juicy_purp_3-1396x1396.jpg',
      category: 'accessories',
    },
    {
      id: 5,
      name: 'Charcoal Tablets',
      description: 'Quick-light charcoal tablets (100-pack)',
      price: 500.0,
      image: 'assets/Images/Hookah/starlightcoal.jpeg',
      category: 'accessories',
    },
    {
      id: 6,
      name: 'Premium Bowl Set',
      description: 'Handcrafted ceramic bowls (3-pack)',
      price: 2000.0,
      image: 'assets/Images/Hookah/bowlwithcover.jpeg',
      category: 'accessories',
    },
  ];

  constructor(private brandService: BrandService) {
    this.brandService.setSelectedBrand('hookahexpress');
  }

  ngOnInit(): void {}

  setFilter(filter: FilterOption): void {
    this.selectedFilter = filter;
  }

  get filteredProducts(): Product[] {
    if (this.selectedFilter === 'all') {
      return this.products;
    }

    return this.products.filter(
      (product) => product.category === this.selectedFilter,
    );
  }
}
