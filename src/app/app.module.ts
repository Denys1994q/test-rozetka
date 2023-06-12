import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgxMaskPipe, NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import {MatSliderModule} from '@angular/material/slider'

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
import { CachedSrcDirective } from './iframe.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { VideoCardsComponent } from './components/video-cards/video-cards.component';
import { CategoryComponent } from './pages/category/category.component';
import { ErrorComponent } from './pages/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ProductComponent } from './pages/product/product.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RatingComponent } from './components/rating/rating.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { PriceComponent } from './components/price/price.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ServicesModalComponent } from './components/services-modal/services-modal.component';
import { CommentsPanelComponent } from './components/comments-panel/comments-panel.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProductCharacteristicsComponent } from './pages/product-characteristics/product-characteristics.component';
import { ProductAllComponent } from './pages/product-all/product-all.component';
import { CharacteristicsBlockComponent } from './components/characteristics-block/characteristics-block.component';
import { ProductCommentsComponent } from './pages/product-comments/product-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsModalComponent } from './components/comments-modal/comments-modal.component';
import { FiltersModalComponent } from './components/filters-modal/filters-modal.component';
import { ProductVideoComponent } from './pages/product-video/product-video.component';
import { ProductPhotosComponent } from './pages/product-photos/product-photos.component';
import { SubcategoryScreenComponent } from './pages/subcategory-screen/subcategory-screen.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { SelectComponent } from './components/select/select.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { AlphabetBlockComponent } from './components/alphabet-block/alphabet-block.component';
import { PricePanelComponent } from './components/price-panel/price-panel.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { BtnsGridPanelComponent } from './components/btns-grid-panel/btns-grid-panel.component';
// import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    CachedSrcDirective,
    CarouselComponent,
    CardsComponent,
    VideoCardsComponent,
    CategoryComponent,
    ErrorComponent,
    FooterComponent,
    SocialMediaComponent,
    ProductComponent,
    BreadcrumbsComponent,
    RatingComponent,
    ColorPaletteComponent,
    PriceComponent,
    CheckboxComponent,
    ServicesModalComponent,
    CommentsPanelComponent,
    TabsComponent,
    ProductCharacteristicsComponent,
    ProductAllComponent,
    CharacteristicsBlockComponent,
    ProductCommentsComponent,
    CommentComponent,
    CommentsModalComponent,
    FiltersModalComponent,
    ProductVideoComponent,
    ProductPhotosComponent,
    SubcategoryScreenComponent,
    CategoryCardComponent,
    SelectComponent,
    SearchPanelComponent,
    InputTextComponent,
    AlphabetBlockComponent,
    PricePanelComponent,
    InputNumberComponent,
    BtnsGridPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatSliderModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
