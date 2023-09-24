import { NgModule } from '@angular/core';
import { CabinetPage } from './pages/cabinet/cabinet.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CabinetPage
  ],
  imports: [
    SharedModule
  ],
  exports: [],
})
export class CabinetModule { }
