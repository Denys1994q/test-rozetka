import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent {
  @Input() data!: any[]
  @Input() route!: string

  activeTab: number = 0

  setActiveTab(i: number) {
    this.activeTab = i
  }
}
