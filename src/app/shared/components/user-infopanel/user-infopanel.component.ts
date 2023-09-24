import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalService } from '../modal/modal.service';
import { MenuService } from '../side-menu/menu.service';

@Component({
  selector: 'app-user-infopanel',
  templateUrl: './user-infopanel.component.html',
  styleUrls: ['./user-infopanel.component.sass']
})
export class UserInfopanelComponent {

    constructor( 
        public authService: AuthService, 
        public modalService: ModalService, 
        public menuService: MenuService) 
    {}

    openDialog() {
        this.modalService.openDialog('login')
        this.menuService.closeMenu()
      }
    
      openRegisterDialog() {
        this.modalService.openDialog('register')
        this.menuService.closeMenu()
      }
}
