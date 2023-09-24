import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent {
  @Input() data!: any[]
  @Input() route!: string
  activeTab: number = 0

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        const lastLetterBeforeId = event.url.lastIndexOf('/')
        const tabName = event.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+event.url.length-1)
        if (this.data) {
          this.data.map((item, index) => {
            if (item.link === tabName) {
              this.activeTab = index
            } else if (item.link === '') {
              this.activeTab = 0
            }
          })
        }
    });
  }

  ngOnInit() {
    this.data = this.data.filter(route => route)
  }
}
