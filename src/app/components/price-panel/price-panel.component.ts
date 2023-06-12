import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-panel',
  templateUrl: './price-panel.component.html',
  styleUrls: ['./price-panel.component.sass']
})
export class PricePanelComponent {
  @Input() startPrice!: number
  @Input() endPrice!: number
  startPriceInp!: number 
  endPriceInp!: number 

  ngOnInit() {
    this.startPriceInp = this.startPrice
    this.endPriceInp = this.endPrice
  }

  setMinValue(e: any) {
    this.startPriceInp = e.target.value
  }

  setMaxValue(e: any) {
    this.endPriceInp = e.target.value
  }
}
