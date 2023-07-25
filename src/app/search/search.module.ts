import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { AlphabetBlockComponent } from './components/alphabet-block/alphabet-block.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { PricePanelComponent } from './components/price-panel/price-panel.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { SearchResultComponent } from '../shared/components/search-result/search-result.component';
import { MainCategoryComponent } from './pages/main-category/main-category.component';
import { MiddleCategoryComponent } from './pages/middle-category/middle-category.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AlphabetBlockComponent,
    CategoryCardComponent,
    PricePanelComponent,
    SearchPanelComponent,
    // SearchResultComponent,
    MainCategoryComponent,
    MiddleCategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductModule,
    AppRoutingModule
  ],

})
export class SearchModule { }
