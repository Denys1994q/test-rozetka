import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatSliderModule} from '@angular/material/slider'
import { CachedSrcDirective } from './iframe.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { CheckboxComponent } from './components/inputs/checkbox/checkbox.component';
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
import { SearchResultComponent } from './components/search-result/search-result.component';
import { InputSearchBoxComponent } from './components/inputs/input-searchBox/input-searchBox.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PricePanelComponent } from './components/price-panel/price-panel.component';
import { ErrorComponent } from './components/error/error.component';
import { AsideComponent } from './components/aside/aside.component';
import { UserInfopanelComponent } from './components/user-infopanel/user-infopanel.component';

@NgModule({
  declarations: [
    CarouselComponent, 
    CachedSrcDirective, 
    CommentComponent,
    CheckboxComponent,
    RatingComponent,
    InputTextComponent,
    LoadMoreBtnComponent,
    SearchResultBtnComponent,
    BtnsGridPanelComponent,
    SocialMediaComponent,
    SelectComponent,
    BreadcrumbsComponent,
    InputNumberComponent,
    SearchResultComponent,
    InputSearchBoxComponent,
    SideMenuComponent,
    PricePanelComponent,
    ErrorComponent,
    UserInfopanelComponent,
    AsideComponent
    // ModalModule
  ],
  imports: [
    CommonModule, 
    MatIconModule, 
    MatSliderModule,
    MatDialogModule, 
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
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
    BreadcrumbsComponent,
    SearchResultComponent,
    InputSearchBoxComponent,
    SideMenuComponent,
    PricePanelComponent,
    ErrorComponent,
    UserInfopanelComponent,
    AsideComponent
    // ModalModule
  ]
})
export class SharedModule { }
