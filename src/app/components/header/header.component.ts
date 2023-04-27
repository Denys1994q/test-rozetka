import { Component } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  openedDialog!: any
  constructor(private menuService: MenuService, private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.openedDialog.subscribe(data=>{
      this.openedDialog = data;
    });
  }

  openMenu() {
    this.menuService.openMenu()
  }

  openDialog() {
    this.modalService.openDialog('product')
  }
  
}
