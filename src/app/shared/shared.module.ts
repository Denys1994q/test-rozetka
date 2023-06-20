import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatSliderModule} from '@angular/material/slider'
import { CachedSrcDirective } from './iframe.directive';
import {MatIconModule} from '@angular/material/icon';
import { ServicesModalComponent } from './components/modal/services-modal/services-modal.component';
import { RegisterModalComponent } from './components/modal/register-modal/register-modal.component';
import { ProductsModalComponent } from './components/modal/products-modal/products-modal.component';
import { LoginModalComponent } from './components/modal/login-modal/login-modal.component';
import { CommentsModalComponent } from './components/modal/comments-modal/comments-modal.component';
import { FiltersModalComponent } from './components/modal/filters-modal/filters-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { CheckboxComponent } from './components/inputs/checkbox/checkbox.component';
import { passAllowedNamesValidatorDirective } from './components/modal/pass-allowed-names-validator.directive';
import { passBigLettersValidatorDirective } from './components/modal/pass-bigLetters-validator.directive';
import { passDigitsValidatorDirective } from './components/modal/pass-digits-validator.directive';
import { emailPhoneValidatorDirective } from './components/modal/email-phone-validator.directive';
import { NgxMaskPipe, NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { RatingComponent } from './components/rating/rating.component';
import { AppRoutingModule } from '../app-routing.module';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { LoadMoreBtnComponent } from './components/btns/load-more-btn/load-more-btn.component';
import { SearchResultBtnComponent } from './components/btns/search-result-btn/search-result-btn.component';
import { BtnsGridPanelComponent } from './components/btns/btns-grid-panel/btns-grid-panel.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';

@NgModule({
  declarations: [
    CarouselComponent, 
    CachedSrcDirective, 
    ServicesModalComponent, 
    RegisterModalComponent, 
    ProductsModalComponent, 
    LoginModalComponent, 
    CommentsModalComponent, 
    FiltersModalComponent, 
    CommentComponent,
    CheckboxComponent,
    passAllowedNamesValidatorDirective,
    passDigitsValidatorDirective,
    passBigLettersValidatorDirective,
    emailPhoneValidatorDirective,
    RatingComponent,
    InputTextComponent,
    LoadMoreBtnComponent,
    SearchResultBtnComponent,
    BtnsGridPanelComponent,
    SocialMediaComponent,
    SelectComponent,
    BreadcrumbsComponent,
    InputNumberComponent
  ],
  imports: [
    CommonModule, 
    // MatSliderModule, 
    MatIconModule, 
    MatDialogModule, 
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    AppRoutingModule
  ],
  providers: [provideNgxMask()],
  exports: [
    AppRoutingModule,
    CarouselComponent, 
    InputTextComponent,
    MatIconModule, 
    MatSliderModule, 
    CachedSrcDirective, 
    MatDialogModule, 
    CommentComponent,
    CheckboxComponent,
    FormsModule,
    RatingComponent,
    LoadMoreBtnComponent,
    SearchResultBtnComponent,
    BtnsGridPanelComponent,
    SocialMediaComponent,
    SelectComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
