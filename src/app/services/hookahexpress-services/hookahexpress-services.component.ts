import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-hookahexpress-services',
  templateUrl: './hookahexpress-services.component.html',
  styleUrls: ['./hookahexpress-services.component.css'],
})
export class HookahexpressServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      name: 'Hookah Setup Service',
      description: 'Professional hookah setup at your location',
      price: 10000.0,
      image: 'assets/Images/xxx_vape_lineup_resized-2048x489.png',
      features: [
        'Complete hookah assembly',
        'Optimal coal preparation',
        'Flavor recommendations',
        'Usage instructions',
      ],
    },
    {
      id: 2,
      name: 'Deep Cleaning Service',
      description:
        'Thorough cleaning and maintenance of your hookah (per hookah)',
      price: 3000.0,
      image: 'assets/Images/cool_mint_1600.jpg',
      features: [
        'Complete disassembly and cleaning',
        'Hose cleaning/replacement',
        'Base descaling',
        'Quality inspection',
      ],
    },
    {
      id: 3,
      name: 'Custom Flavor Mixing',
      description: 'Create your own unique flavor combination',
      price: 5000.0,
      image: 'assets/Images/mixberry_ice_1600.jpg',
      features: [
        'Expert flavor consultation',
        'Custom blend creation',
        'Taste testing',
        'Recipe card provided',
      ],
    },
    {
      id: 4,
      name: 'Event Catering',
      description: 'Hookah service for your special events',
      price: 15000.0,
      image: 'assets/Images/ja-vibes-girl.png',
      features: [
        'Multiple hookah setups',
        'Professional attendant',
        'Premium tobacco selection',
        'Full event support',
      ],
    },
    {
      id: 5,
      name: 'Maintenance Package',
      description: 'Monthly maintenance subscription',
      price: 12000.0,
      image: 'assets/Images/peach_ice_1600.jpg',
      features: [
        'Monthly deep cleaning',
        'Parts inspection',
        'Priority service',
        '10% discount on products',
      ],
    },
    {
      id: 6,
      name: 'Consultation Service',
      description: 'Expert advice on hookah selection and usage',
      price: 7000.0,
      image: 'assets/Images/blueberry_ice_1600.jpg',
      features: [
        'One-on-one consultation',
        'Product recommendations',
        'Usage tips and tricks',
        'Troubleshooting assistance',
      ],
    },
  ];

  constructor(private brandService: BrandService) {
    this.brandService.setSelectedBrand('hookahexpress');
  }

  ngOnInit(): void {}
}
