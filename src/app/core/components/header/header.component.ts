import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/components/side-menu/menu.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  openedDialog!: any
  searchInpValue: string = ''

  constructor(private menuService: MenuService, private modalService: ModalService, private router: Router,  private ProductService: ProductService) {}

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

  findProd() {
    const {engName, id} = this.ProductService.findProduct(this.searchInpValue)
    if (engName && id) {
      this.router.navigateByUrl(`/${engName}/${id}`);
    }
  }
  
}
