import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass']
})
export class SearchPanelComponent implements OnInit {
  showLess: boolean = true
  activeTitle: boolean = false
  activeIndexArr: number[] = []
  activeTitleIndex!: number | null 
  @Input() data!: any
  brendData: any = []
  priceDataStart!: number  
  priceDataEnd!: number
  @Output() searchPanelChange = new EventEmitter<string>();

  ngOnInit() {
    this.brendData = this.data.filter((item: any) => item.title === 'Бренд')[0].options
    this.priceDataStart = this.data.filter((item: any) => item.title === 'Ціна')[0].options.start
    this.priceDataEnd = this.data.filter((item: any) => item.title === 'Ціна')[0].options.end
  }

  openBlock(i: number) {
    if ( this.activeIndexArr.indexOf(i) === -1) {
      this.activeIndexArr.push(i)
    } else {
      this.activeIndexArr = this.activeIndexArr.filter(item => item !== i)
    }
  }

  makeActiveTitle(i: number) {
    this.activeTitleIndex = i
  }

  makeDisactiveTitle() {
    this.activeTitleIndex = null
  }

  onCheckboxChange(changedInput: string) {
    this.searchPanelChange.emit(changedInput)
  }

}
