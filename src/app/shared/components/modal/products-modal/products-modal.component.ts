import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import {categories} from '../../../../data'
import { CategoryItem } from '../../../../data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.sass']
})

// кщо немає субайтемс не показувати! 

// де робити запити по дані? На сторінці, звідки відкривається модалка і передавати в модалку дані. Чи в самій вже модалці, яка тоді спочатку відкриється пустою, піде запит, спінер умовно і тоді дані
export class ProductsModalComponent {
  activeCategoryIndex: number = 0
  products: CategoryItem[] = categories

  getSubcategories() {
    return this.products[this.activeCategoryIndex].subCategories.filter((data: any) => data.popular && data.popular.length > 0)
  }

  constructor(public modalService: ModalService, public SearchResultsService: SearchResultsService, public router: Router,  public route:ActivatedRoute) {}
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
    
  // ngOnInit() {
  //   this.products = this.data
  // }

  onMouseEnter(i: any) {
    this.activeCategoryIndex = i
  }
  
  closeDialog() {
    this.modalService.closeDialog()
  }

  closeDialog2(id: any) {
    this.SearchResultsService.removeAll()
    this.SearchResultsService.getCurrentCategory(id)
    this.modalService.closeDialog()
  }

  takeValueAndCloseDialog(value: string, id: string, categoryId: string) {
    const lastLetterBeforeId = this.router.url.lastIndexOf('/')
    const  routerId = this.router.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+this.router.url.length-1)
    // якщо перейшли на інший роут, а не в межах свого. 
    if (routerId !== id) {
      console.log(1)
      // якщо роут не такий як в головної підкатегорії 
      if (id !== categoryId) {
        console.log(1.1)
        this.SearchResultsService.removeAll()
        this.SearchResultsService.getCurrentCategory(id)
        this.modalService.closeDialog()
      } else {
        console.log(1.2)
        this.SearchResultsService.removeAll()
        this.SearchResultsService.setBaseInput(value)
      }
    } else {
      this.SearchResultsService.removeAll()
      this.SearchResultsService.getCurrentCategory(id)
      this.SearchResultsService.addInput(value)
    }
    this.modalService.closeDialog()
  }

}

