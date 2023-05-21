import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent {
  constructor(private modalService: ModalService) {}
  @Input() label!: string 
  @Input() auth!: boolean
  @Input() services!: boolean

  service: boolean = false

  onCheck(e: any) {
    this.service = e.target.checked
  }

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('services')
  }
}
