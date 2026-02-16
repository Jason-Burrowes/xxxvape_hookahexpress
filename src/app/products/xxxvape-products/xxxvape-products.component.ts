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

type ProductCategory = '1600' | '4000' | 'accessories';
type FilterOption = 'all' | ProductCategory;

@Component({
  selector: 'app-xxxvape-products',
  templateUrl: './xxxvape-products.component.html',
  styleUrls: ['./xxxvape-products.component.css'],
})
export class XxxvapeProductsComponent implements OnInit {
  selectedFilter: FilterOption = 'all';

  filterOptions: Array<{ value: FilterOption; label: string }> = [
    { value: 'all', label: 'All' },
    { value: '1600', label: '1600' },
    { value: '4000', label: '4000' },
    { value: 'accessories', label: 'Accessories' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: '1600 Jamaican Vibes Vape',
      description:
        'Experience the vibrant and tropical flavors of Jamaica with our Jamaican Vibes Vape',
      price: 2000.0,
      image: 'assets/Images/Vape-Pen-Individual-JV-1-1132x1116.png',
      category: '1600',
    },
    {
      id: 2,
      name: '1600 Blueberry Ice Vape',
      description:
        'Experience the cool and refreshing taste of blueberry ice with every puff.',
      price: 2000.0,
      image: 'assets/Images/Vape-Pens-Blueberry-1-358x1004.png',
      category: '1600',
    },
    {
      id: 3,
      name: '1600 Mixed Berry Vape',
      description:
        'Indulge in the sweet and tangy flavors of mixed berries with our delicious vape blend.',
      price: 2000.0,
      image: 'assets/Images/Vape-Pens-Mix-Berry-1-1-358x1004.png',
      category: '1600',
    },

    {
      id: 4,
      name: '4000 Cool Mint Vape',
      description:
        'Experience the refreshing taste of cool mint with every puff.',
      price: 3500.0,
      image: 'assets/Images/coolmint_4000.png',
      category: '4000',
    },
    {
      id: 5,
      name: '4000 Strawberry Kiwi Vape',
      description:
        'Enjoy the sweet and tangy flavors of strawberry and kiwi with every puff.',
      price: 3500.0,
      image: 'assets/Images/Square-xXx-Vape-Strawberry-Kiwi-300x300.png',
      category: '4000',
    },
    {
      id: 6,
      name: 'E-Liquid Collection',
      description: 'Assorted premium e-liquid flavors (6-pack)',
      price: 6000.0,
      image: 'assets/Images/lychee_ice.jpg',
      category: 'accessories',
    },
  ];

  constructor(private brandService: BrandService) {
    this.brandService.setSelectedBrand('xxxvape');
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
