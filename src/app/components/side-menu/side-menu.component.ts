import { Component, Input } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent {
  openedMenu!: boolean

  constructor(private menuService: MenuService, private modalService: ModalService) {}

  ngOnInit() {
    this.menuService.openedMenu.subscribe(data=>{
      this.openedMenu=data;
    });
  }

  openMenu() {
    this.menuService.openMenu()
  }
  
  closeMenu() {
    this.menuService.closeMenu()
  }

  openDialog() {
    this.modalService.openDialog('login')
    this.closeMenu()
  }

  openRegisterDialog() {
    this.modalService.openDialog('register')
    this.closeMenu()
  }

  openProductsDialog() {
    this.modalService.openDialog('product')
    this.closeMenu()
  }
}
