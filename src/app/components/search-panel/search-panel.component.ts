import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass']
})
export class SearchPanelComponent {
  showLess: boolean = false
  activeTitle: boolean = false
  activeIndexArr: number[] = []
  activeTitleIndex!: number | null 
  @Input() data!: any

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

}
