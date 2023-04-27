import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MenuService {
    openedMenu:Subject<any> = new Subject<any>();
    
    openMenu() {
        this.openedMenu.next(true)
    }
    
    closeMenu() {
        this.openedMenu.next(false)
    }
}