import { NgModule } from '@angular/core';
import { CabinetPage } from './pages/cabinet/cabinet.component';
import { SharedModule } from '../shared/shared.module';
import { CabinetOrdersPage } from './pages/cabinet-orders/cabinet-orders.component';
import { CabinetPersonalInfoPage } from './pages/cabinet-personalInfo/cabinet-personalInfo.component';
import { CabinetRecentlyViewedPage } from './pages/cabinet-recently-viewed/cabinet-recently-viewed.component';
import { CabinetWishlistPage } from './pages/cabinet-wishlist/cabinet-wishlist.component';

@NgModule({
  declarations: [
    CabinetPage,
    CabinetOrdersPage,
    CabinetPersonalInfoPage,
    CabinetRecentlyViewedPage,
    CabinetWishlistPage
  ],
  imports: [
    SharedModule
  ],
  exports: [],
})
export class CabinetModule { }
