import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductModule } from '../product/product.module';
import { ProductService } from '../product/services/product.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    HomeComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
