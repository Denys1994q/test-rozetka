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
import { Router } from '@angular/router';
import { ApiService } from './core/services/api.service';
import { SubCategoryItem } from './data';
import { CabinetPage } from './cabinet/pages/cabinet/cabinet.component';

interface IRoute {
  title: string,
  id: string
}

// роути категорій: смартфони, тв і електроніка, ноутбуки та комп'ютери, побутова техніка ...
const categoriesRoutes: IRoute[] = []
// роути підкатегорій: смартфони, тв і електроніка (телефони, телевізори, аудіотехніка) ...
const middleCategoriesRoutes: IRoute[] = []
// всі продукти
// export const productsRoutes: IRoute[] = []

// categories.map(item => {
//   categoriesRoutes.push({title: item.engName, id: item.id})
//   item.subCategories.map((middleCat: SubCategoryItem) => {
//       middleCategoriesRoutes.push({title: middleCat.engName, id: middleCat.id})
//       middleCat.products.map((product: any) => {
//         productsRoutes.push({title: product.engName, id: product.id})
//       })
//   })
// })

// ці масиви даних мають приходити з беку, щоб при появі нового товару не треба було вручну тут код міняти нижче.
// для продуктів зробити схожий матчер, бо зараз навіть помилка в категорії буде вести не на ерор, а на сторінку Товару
const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: 'mobilnij-telefon-samsung-galaxy/6500037245d997489bf91596', component: HomeComponent},
    // {
    //     matcher: (url: any) => { 
    //         for (let i = 0; i < productsRoutes.length; i++) {
    //             if (url[0] && url[1]) {
    //                 if (url.length === 2 && url[0].path == productsRoutes[i].title && url[1].path == productsRoutes[i].id) {
    //                     return {consumed: url}
    //                 } else if (url.length === 3) {
    //                     return {consumed: url.slice(0, 2)}
    //                 }
    //             }
    //         }
    //         return null
    //     }, component: ProductComponent, children: [
    // {
    //   path: '',
    //   component: ProductAllComponent,
    // },
    // {
    //   path: 'characteristics',
    //   component: ProductCharacteristicsComponent,
    // },
    // {
    //   path: 'comments',
    //   component: ProductCommentsComponent,
    // },
    // {
    //   path: 'video',
    //   component: ProductVideoComponent,
    // },
    // {
    //   path: 'photos',
    //   component: ProductPhotosComponent,
    // },
    // ],
    // },
    {path: 'cabinet/orders', component: CabinetPage},
    {path: 'error', component: ErrorComponent},
    {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

    constructor(private router: Router, private apiService: ApiService) {}

    loadDynamicRoutes(): void {
        let categoriesRoutes: any = []
        let middleCategoriesRoutes: any = []
        let productsRoutes: any = []

        this.apiService.getAllCategories().subscribe({
            next: response => {
                response.map((category: any) => {
                    categoriesRoutes.push({title: category.engName, id: category.id})
                    category.subCategories.map((middleCat: SubCategoryItem) => {
                        middleCategoriesRoutes.push({title: middleCat.engName, id: middleCat.id})
                    })
                })
            },
            error: err => console.log(err)
        })
        this.apiService.getAllProducts().subscribe({
            next: response => {
                response.map((product: any) => {
                    productsRoutes.push({title: product.engName, id: product._id})
                })
            },
            error: err => console.log(err)
        })

        this.addRoute(categoriesRoutes, MainCategoryComponent)
        this.addRoute(middleCategoriesRoutes, MiddleCategoryComponent)
        this.addProductRoute(productsRoutes)
    }

    addRoute(data: any, component: any) {
        const route: Route = {
            matcher: (url) => {
                for (let i = 0; i < data.length; i++) {
                if (url[0] && url[1]) {
                    if (url[0].path == data[i].title && url[1].path == data[i].id) {
                    return {
                        consumed: url
                    }
                    }
                }
                }
                return null
            }, component: component
        }

        this.router.config.unshift(route);
    }

    addProductRoute(productsRoutes: any) {
        const route: Route = {
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
        }
        this.router.config.unshift(route);
    }

}
