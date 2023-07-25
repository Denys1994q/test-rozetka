import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ProductService } from 'src/app/product/services/product.service';
import { SearchResultsService } from 'src/app/search/services/search-results.service';

@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.sass']
})
export class FiltersModalComponent {
  items: any[] = [
    {label: '1 зірка', icons: [1]},
    {label: '2 зірки', icons: [1,2]},
    {label: '3 зірки', icons: [1,2,3]},
    {label: '4 зірки', icons: [1,2,3,4]},
    {label: '5 зірок', icons: [1,2,3,4,5]}
  ]
  selectedRaitingIndex!: number 

  constructor(private modalService: ModalService, public ProductService: ProductService, public SearchResultsService: SearchResultsService) {}

  setRaiting(selectedRaitingIndex: number) {
    this.selectedRaitingIndex = this.items[selectedRaitingIndex].icons[selectedRaitingIndex]
  }

  filterProducts() {
    this.modalService.closeDialog()
    this.ProductService.filterProdComments(this.selectedRaitingIndex)
    this.SearchResultsService.addInput(`Оцінка користувачів: ${this.selectedRaitingIndex}`, this.selectedRaitingIndex)
  }

  closeDialog() {
    this.modalService.closeDialog()
  }

}
