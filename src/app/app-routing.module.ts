import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { LandingComponent } from './landing/landing.component';
import { XxxvapeProductsComponent } from './products/xxxvape-products/xxxvape-products.component';
import { HookahexpressProductsComponent } from './products/hookahexpress-products/hookahexpress-products.component';
import { HookahexpressServicesComponent } from './services/hookahexpress-services/hookahexpress-services.component';
import { BecomeRetailerComponent } from './retailer/become-retailer/become-retailer.component';
import { RetailLocationsComponent } from './retailer/retail-locations/retail-locations.component';

const routes: Routes = [
  { path: '', redirectTo: '/age-verification', pathMatch: 'full' },
  { path: 'age-verification', component: AgeVerificationComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'xxxvape/products', component: XxxvapeProductsComponent },
  { path: 'retailer/become', component: BecomeRetailerComponent },
  { path: 'retailer/locations', component: RetailLocationsComponent },
  { path: 'hookahexpress/products', component: HookahexpressProductsComponent },
  { path: 'hookahexpress/services', component: HookahexpressServicesComponent },
  { path: '**', redirectTo: '/age-verification' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
