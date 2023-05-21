import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductCharacteristicsComponent } from './pages/product-characteristics/product-characteristics.component';
import { ProductAllComponent } from './pages/product-all/product-all.component';
import { ProductCommentsComponent } from './pages/product-comments/product-comments.component';
import { ProductVideoComponent } from './pages/product-video/product-video.component';
import { ProductPhotosComponent } from './pages/product-photos/product-photos.component';

// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   // {path: 'telefony-tv-i-ehlektronika/c4627949', component: CategoryComponent},
//   // {path: ':category/:categoryId', component: CategoryComponent},
//   // {path: `${s}` + ':ds', component: CategoryComponent},
//   {path: 'error', component: ErrorComponent},
//   {path: '**', redirectTo: '/error'},
// ];

const s = [{title: 'telefony-tv-i-ehlektronika', id: 'c4627949'}]
// для продуктів зробити схожий матчер, бо зараз навіть помилка в категорії буде вести не на ерор, а на сторінку Товару
const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    matcher: (url) => {
    for (let i = 0; i < s.length; i++) {
      if (url[0] && url[1]) {
        if (url[0].path == s[i].title && url[1].path == s[i].id) {
          return {
            consumed: url
          }
        }
      }
    }
    return null
  }, component: CategoryComponent},
  {path: 'prod/1', component: ProductComponent, children: [
    {
      path: '',
      component: ProductAllComponent,
    },
    {
      path: 'characteristics',
      component: ProductCharacteristicsComponent,
    },
    {
      path: 'comments',
      component: ProductCommentsComponent,
    },
    {
      path: 'video',
      component: ProductVideoComponent,
    },
    {
      path: 'photos',
      component: ProductPhotosComponent,
    },
    ],
  },
  // {path: ':pr/:ds', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
