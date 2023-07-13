import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/shared/components/carousel/carousel.component';
import { CategoryItem } from 'src/app/search/components/category-card/category-card.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchResultsService } from '../../services/search-results.service';

import { categories } from 'src/app/data';

type Brend = {
  img: string
}
interface ICategory {
  title: string,
  banners: Slide[],
  popular: CategoryItem[],
  brends: Brend[],
  list: CategoryItem[]
}

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.sass']
})
export class MainCategoryComponent implements OnInit {
  // має йти запит до АПІ за даними в роуті (id категорії) і далі з усіх товарів приходить потрібний  
  category!: any
  
  constructor(public router: Router, public route:ActivatedRoute, public SearchResultsService: SearchResultsService) {}

  // тут мав би йти запит на сервер по цьому id
  ngOnInit(): void {
    // скидаємо попередньо вибрані інпути з інших сторінок, щоб коректно працювало 
    if (this.SearchResultsService.selectedInputs.length > 0) {
      this.SearchResultsService.removeAll()
    }
    
    this.route.url.subscribe(route => {
      const lastLetterBeforeId = this.router.url.lastIndexOf('/')
      const id = this.router.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+this.router.url.length-1)
      // визначаємо яка категорія 
      this.category = categories.filter(item => item.id === id )[0]
    })
  }

  getCategories() {
    return this.category.subCategories.filter((item: any) => item.img)
  }

}
