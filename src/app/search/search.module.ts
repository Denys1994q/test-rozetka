import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { AlphabetBlockComponent } from './components/alphabet-block/alphabet-block.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { PricePanelComponent } from './components/price-panel/price-panel.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryScreenComponent } from './pages/subcategory-screen/subcategory-screen.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AlphabetBlockComponent,
    CategoryCardComponent,
    PricePanelComponent,
    SearchPanelComponent,
    SearchResultComponent,
    CategoryComponent,
    SubcategoryScreenComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductModule,
    AppRoutingModule
  ]
})
export class SearchModule { }
