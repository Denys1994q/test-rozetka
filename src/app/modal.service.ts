import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { ServicesModalComponent } from './components/services-modal/services-modal.component';
import { CommentsModalComponent } from './components/comments-modal/comments-modal.component';
import { FiltersModalComponent } from './components/filters-modal/filters-modal.component';

@Injectable({ providedIn: 'root' })

export class ModalService {
    openedDialog:Subject<any> = new Subject<any>();
    data!: any

    constructor(public dialog: MatDialog) {}
    
    getData(data: any) {
      this.data = data
    }

    openDialog(variant: string) {
        let modalVariant: any
        let modalStyles: Object = {}
        switch (variant) {
            case 'product': 
                if (variant == 'product') {
                    modalVariant = ProductsModalComponent
                    modalStyles = {
                      width: '90vw',
                      maxWidth: '90vw',
                      minHeight: '500px',
                      data: this.data
                    }
                } 
                break
            case 'login': 
                if (variant == 'login') {
                    modalVariant = LoginModalComponent
                    modalStyles = {
                      panelClass: 'modal-login',
                    }
                }
                break
            case 'register': 
                if (variant == 'register') {
                    modalVariant = RegisterModalComponent
                    modalStyles = {
                      panelClass: 'modal-register',
                    }
                }
                break
            case 'services': 
                if (variant == 'services') {
                    modalVariant = ServicesModalComponent
                    modalStyles = {
                      panelClass: 'modal-services',
                      paddingBottom: 0
                    }
                }
                break
            case 'comments': 
                if (variant == 'comments') {
                    modalVariant = CommentsModalComponent
                    modalStyles = {
                      panelClass: 'modal-comments',
                      width: '90vw',
                      maxWidth: '90vw',
                      minHeight: '500px',
                      data: this.data
                    }
                }
                break
            case 'filters': 
                if (variant == 'filters') {
                    modalVariant = FiltersModalComponent
                    modalStyles = {
                      panelClass: 'modal-filters',
                    }
                }
                break
        }
        this.openedDialog.next(variant)
        const dialogRef = this.dialog.open(modalVariant, modalStyles);
        dialogRef.afterClosed().subscribe(result => {
          this.openedDialog.next(false)
          console.log(`Dialog result: ${result}`);
        });
      }

      closeDialog() {
        this.dialog.closeAll()
      }
}