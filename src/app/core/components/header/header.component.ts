import { Component } from '@angular/core';
import { MenuService } from 'src/app/shared/components/side-menu/menu.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  openedDialog!: any

  constructor(
    public menuService: MenuService, 
    public modalService: ModalService, 
    public authService: AuthService 
  ) {}

  ngOnInit() {
    this.modalService.openedDialog.subscribe(data=>{
      this.openedDialog = data;
    });
  }
  
}
