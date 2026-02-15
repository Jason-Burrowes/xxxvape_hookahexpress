import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { LandingComponent } from './landing/landing.component';
import { XxxvapeProductsComponent } from './products/xxxvape-products/xxxvape-products.component';
import { HookahexpressProductsComponent } from './products/hookahexpress-products/hookahexpress-products.component';
import { HookahexpressServicesComponent } from './services/hookahexpress-services/hookahexpress-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AgeVerificationComponent,
    LandingComponent,
    XxxvapeProductsComponent,
    HookahexpressProductsComponent,
    HookahexpressServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
