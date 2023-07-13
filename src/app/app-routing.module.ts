import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { MainCategoryComponent } from './search/pages/main-category/main-category.component';
import { MiddleCategoryComponent } from './search/pages/middle-category/middle-category.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { ProductComponent } from './product/pages/product/product.component';
import { ProductCharacteristicsComponent } from './product/pages/product-characteristics/product-characteristics.component';
import { ProductAllComponent } from './product/pages/product-all/product-all.component';
import { ProductCommentsComponent } from './product/pages/product-comments/product-comments.component';
import { ProductVideoComponent } from './product/pages/product-video/product-video.component';
import { ProductPhotosComponent } from './product/pages/product-photos/product-photos.component';

import { categories } from './data';
import { SubCategoryItem } from './data';

interface IRoute {
  title: string,
  id: string
}

// роути категорій: смартфони, тв і електроніка, ноутбуки та комп'ютери, побутова техніка ...
const categoriesRoutes: IRoute[] = []
// роути підкатегорій: смартфони, тв і електроніка (телефони, телевізори, аудіотехніка) ...
const middleCategoriesRoutes: IRoute[] = []
// всі продукти
export const productsRoutes: IRoute[] = []

categories.map(item => {
  categoriesRoutes.push({title: item.engName, id: item.id})
  item.subCategories.map((middleCat: SubCategoryItem) => {
      middleCategoriesRoutes.push({title: middleCat.engName, id: middleCat.id})
      middleCat.products.map((product: any) => {
        productsRoutes.push({title: product.engName, id: product.id})
      })
  })
})

// ці масиви даних мають приходити з беку, щоб при появі нового товару не треба було вручну тут код міняти нижче.
// для продуктів зробити схожий матчер, бо зараз навіть помилка в категорії буде вести не на ерор, а на сторінку Товару
const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        matcher: (url) => {
            // console.log(0)
            for (let i = 0; i < categoriesRoutes.length; i++) {
            if (url[0] && url[1]) {
                if (url[0].path == categoriesRoutes[i].title && url[1].path == categoriesRoutes[i].id) {
                return {
                    consumed: url
                }
                }
            }
            }
            return null
        }, component: MainCategoryComponent
    },
    {   
        matcher: (url) => {
            // console.log(1)
            for (let i = 0; i < middleCategoriesRoutes.length; i++) {
                if (url[0] && url[1]) {
                    if (url[0].path == middleCategoriesRoutes[i].title && url[1].path == middleCategoriesRoutes[i].id) {
                    return {
                        consumed: url
                    }
                    }
                }
            }
            // console.log('співпадає 0')
            return null
        }, component: MiddleCategoryComponent
    },
    {
        matcher: (url: any) => { 
            for (let i = 0; i < productsRoutes.length; i++) {
                if (url[0] && url[1]) {
                    if (url.length === 2 && url[0].path == productsRoutes[i].title && url[1].path == productsRoutes[i].id) {
                        return {consumed: url}
                    } else if (url.length === 3) {
                        return {consumed: url.slice(0, 2)}
                    }
                }
            }
            return null
        }, component: ProductComponent, children: [
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
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
