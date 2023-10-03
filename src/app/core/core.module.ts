import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductModule } from '../product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ProductModule,
    SharedModule,
    CartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
