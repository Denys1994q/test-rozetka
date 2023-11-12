import { Component } from '@angular/core';
import { RecentlyViewedService } from '../../services/recently-viewed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cabinet-recently-viewed',
  templateUrl: './cabinet-recently-viewed.component.html',
  styleUrls: ['./cabinet-recently-viewed.component.sass']
})
export class CabinetRecentlyViewedPage {

    constructor(public recentlyViewedService: RecentlyViewedService) {}

    // loading
    loading: boolean = false
    private subscription!: Subscription;

    ngOnInit() {
        this.loading = true
        this.subscription = this.recentlyViewedService.getRecentlyViewedProds().subscribe({
            next: resp => this.handleUserUpdate(resp.products),
            error: err => this.handleUserUpdate(null)
        })
    }

    handleClearAllClick() {
        this.loading = true
        this.recentlyViewedService.removeAllRecentlyViewedProds().subscribe({
            next: response => {
                this.loading = false
                this.recentlyViewedService.setRecentlyViewedItems(response.updatedProds)
            },
            error: err => this.loading = false
        })
    }

    handleUserUpdate(products: any) {
        this.loading = false;
        if (products) {
            this.recentlyViewedService.setRecentlyViewedItems(products);
        }
    }

    onCardDeleteBtnClick(prodId: string) {
        this.recentlyViewedService.removeOneRecentlyViewedProd(prodId).subscribe({
            next: resp => {
                this.loading = true
                this.subscription = this.recentlyViewedService.getRecentlyViewedProds().subscribe({
                    next: resp => this.handleUserUpdate(resp.products),
                    error: err => this.handleUserUpdate(null)
                })
            } 
        })
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}