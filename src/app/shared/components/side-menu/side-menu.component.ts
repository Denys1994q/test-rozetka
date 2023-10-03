import { Component } from '@angular/core';
import { MenuService } from 'src/app/shared/components/side-menu/menu.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent {
  activeSearchParam!: any

  constructor(
    public menuService: MenuService, 
    private modalService: ModalService,
    public searchResultsService: SearchResultsService,
    public authService: AuthService,
    private router: Router
  ) {}

  openProductsDialog() {
    this.modalService.openDialog('product')
    this.menuService.closeMenu()
  }

  closePrev(searchParam: any) {
    this.activeSearchParam = searchParam
    this.menuService.closeMenu()
    this.menuService.openMenu('search-deep') 
  }

  onPricePanelChange(val: any) {
    this.searchResultsService.addInput(val)
  }

  showCancelBtn() {
    if (this.searchResultsService.selectedInputs.find(item => item.title === this.activeSearchParam.title)) {
      return true
    } else {
      return false
    }
  }

  resetOne(searchParam: any) {
    searchParam.options.map((option: any) => {
      this.searchResultsService.removeOne(option.label)
    })
  }

  resetAll() {
    this.searchResultsService.removeAll()
  }

  getNumActiveOptions(activeSearchParam: any) {
    return this.searchResultsService.selectedInputs.find(input => input.title === activeSearchParam.title).options.length
  }

  getSelectedPositions(searchParam: any) {
    if (this.searchResultsService.selectedInputs.find(item => item.title === searchParam.title)) {
      return this.searchResultsService.selectedInputs.find(item => item.title === searchParam.title).options
    } else {
      return false
    }
  }

  logout() {
    this.authService.logout().subscribe({
      next: response => {
        this.menuService.closeMenu()
      },
      error: (error) => {
        console.error('Помилка при виконанні запиту:', error);
      }
    })
  }

}