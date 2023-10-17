import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from './product/product.module';
import { SearchModule } from './search/search.module';
import { CoreModule } from './core/core.module';
import { ModalModule } from './shared/components/modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    SearchModule,
    CoreModule,
    ModalModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appRoutingModule: AppRoutingModule) => () => appRoutingModule.loadDynamicRoutes(),
      multi: true,
      deps: [AppRoutingModule],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
