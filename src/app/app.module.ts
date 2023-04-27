import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgxMaskPipe, NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { passAllowedNamesValidatorDirective } from './pass-allowed-names-validator.directive';
import { passDigitsValidatorDirective } from './pass-digits-validator.directive';
import { passBigLettersValidatorDirective } from './pass-bigLetters-validator.directive';
import { emailPhoneValidatorDirective } from './email-phone-validator.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterModalComponent,
    ProductsModalComponent,
    LoginModalComponent,
    HeaderComponent,
    SideMenuComponent,
    passAllowedNamesValidatorDirective,
    passDigitsValidatorDirective,
    passBigLettersValidatorDirective,
    emailPhoneValidatorDirective,
    CarouselComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
