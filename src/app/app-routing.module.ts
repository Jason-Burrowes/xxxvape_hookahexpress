import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { LandingComponent } from './landing/landing.component';
import { XxxvapeProductsComponent } from './products/xxxvape-products/xxxvape-products.component';
import { HookahexpressProductsComponent } from './products/hookahexpress-products/hookahexpress-products.component';
import { HookahexpressServicesComponent } from './services/hookahexpress-services/hookahexpress-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/age-verification', pathMatch: 'full' },
  { path: 'age-verification', component: AgeVerificationComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'xxxvape/products', component: XxxvapeProductsComponent },
  { path: 'hookahexpress/products', component: HookahexpressProductsComponent },
  { path: 'hookahexpress/services', component: HookahexpressServicesComponent },
  { path: '**', redirectTo: '/age-verification' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
