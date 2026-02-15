import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-hookahexpress-services',
  templateUrl: './hookahexpress-services.component.html',
  styleUrls: ['./hookahexpress-services.component.css']
})
export class HookahexpressServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      name: 'Hookah Setup Service',
      description: 'Professional hookah setup at your location',
      price: 49.99,
      icon: '🔧',
      features: [
        'Complete hookah assembly',
        'Optimal coal preparation',
        'Flavor recommendations',
        'Usage instructions'
      ]
    },
    {
      id: 2,
      name: 'Deep Cleaning Service',
      description: 'Thorough cleaning and maintenance of your hookah',
      price: 39.99,
      icon: '🧼',
      features: [
        'Complete disassembly and cleaning',
        'Hose cleaning/replacement',
        'Base descaling',
        'Quality inspection'
      ]
    },
    {
      id: 3,
      name: 'Custom Flavor Mixing',
      description: 'Create your own unique flavor combination',
      price: 29.99,
      icon: '🎨',
      features: [
        'Expert flavor consultation',
        'Custom blend creation',
        'Taste testing',
        'Recipe card provided'
      ]
    },
    {
      id: 4,
      name: 'Event Catering',
      description: 'Hookah service for your special events',
      price: 299.99,
      icon: '🎉',
      features: [
        'Multiple hookah setups',
        'Professional attendant',
        'Premium tobacco selection',
        'Full event support'
      ]
    },
    {
      id: 5,
      name: 'Maintenance Package',
      description: 'Monthly maintenance subscription',
      price: 79.99,
      icon: '📅',
      features: [
        'Monthly deep cleaning',
        'Parts inspection',
        'Priority service',
        '10% discount on products'
      ]
    },
    {
      id: 6,
      name: 'Consultation Service',
      description: 'Expert advice on hookah selection and usage',
      price: 19.99,
      icon: '💬',
      features: [
        'One-on-one consultation',
        'Product recommendations',
        'Usage tips and tricks',
        'Troubleshooting assistance'
      ]
    }
  ];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.setSelectedBrand('hookahexpress');
  }
}
