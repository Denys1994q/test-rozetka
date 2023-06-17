import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-panel',
  templateUrl: './price-panel.component.html',
  styleUrls: ['./price-panel.component.sass']
})
export class PricePanelComponent {
  startPriceInp!: number 
  endPriceInp!: number 
  @Input() startPrice!: number
  @Input() endPrice!: number
  @Output() pricePanelChange = new EventEmitter<any>();

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

  onChange() {
    const priceString: string = this.startPriceInp.toString() + ' - ' + this.endPriceInp.toString() + ' грн'
    this.pricePanelChange.emit(priceString)
  }
}
