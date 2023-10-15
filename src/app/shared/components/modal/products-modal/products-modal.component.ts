import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.sass']
})

export class ProductsModalComponent {
  activeCategoryIndex: number = 0
  products!: any[]

  constructor(public modalService: ModalService, public SearchResultsService: SearchResultsService, public router: Router,  public route:ActivatedRoute, public apiService: ApiService) {}
    
  ngOnInit() {
      this.apiService.getAllCategories().subscribe({
        next: (data) => this.products = data,
        error: (err) => console.log(err)
      })
  }

  getSubcategories() {
    return this.products[this.activeCategoryIndex].subCategories.filter((data: any) => data.popular && data.popular.length > 0)
  }

  onMouseEnter(i: any) {
    this.activeCategoryIndex = i
  }
  
  closeDialog() {
    console.log('closeDialog')
    this.modalService.closeDialog()
  }

  closeDialog2(id: any) {
    console.log('closeDialog2')
    this.SearchResultsService.removeAll()
    this.SearchResultsService.getCurrentCategory(id)
    this.modalService.closeDialog()
  }

  takeValueAndCloseDialog(value: string, id: string, categoryId: string) {
    console.log('takeValueAndCloseDialog')
    const lastLetterBeforeId = this.router.url.lastIndexOf('/')
    const  routerId = this.router.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+this.router.url.length-1)
    // якщо перейшли на інший роут, а не в межах свого. 
    if (routerId !== id) {
      // якщо роут не такий як в головної підкатегорії 
      if (id !== categoryId) {
        console.log(1)
        this.SearchResultsService.removeAll()
        this.SearchResultsService.getCurrentCategory(id)
        this.modalService.closeDialog()
      } else {
        console.log(2)
        this.SearchResultsService.removeAll()
        this.SearchResultsService.setBaseInput(value)
      }
    } else {
      console.log('else')
      this.SearchResultsService.removeAll()
      this.SearchResultsService.getCurrentCategory(id)
      this.SearchResultsService.addInput(value)
    }
    this.modalService.closeDialog()
  }

}

