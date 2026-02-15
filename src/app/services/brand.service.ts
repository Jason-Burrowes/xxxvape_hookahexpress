import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Brand = 'xxxvape' | 'hookahexpress' | null;

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private selectedBrandSubject = new BehaviorSubject<Brand>(null);
  public selectedBrand$: Observable<Brand> = this.selectedBrandSubject.asObservable();

  constructor() { }

  setSelectedBrand(brand: Brand): void {
    this.selectedBrandSubject.next(brand);
  }

  getSelectedBrand(): Brand {
    return this.selectedBrandSubject.value;
  }
}
