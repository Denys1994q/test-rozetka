import { Component } from '@angular/core';

@Component({
  selector: 'app-price-panel',
  templateUrl: './price-panel.component.html',
  styleUrls: ['./price-panel.component.sass']
})
export class PricePanelComponent {
  startPrice: number = 1
  endPrice: number = 100
}
