import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

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

  constructor(private modalService: ModalService) {}

  closeDialog() {
    this.modalService.closeDialog()
  }

}
