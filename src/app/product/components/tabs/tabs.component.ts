import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent {
  @Input() data!: any[]
  @Input() startRoute!: string

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit() {
    // this.data = this.data.filter(route => route)

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        const lastLetterBeforeId = event.url.lastIndexOf('/')
        const tabName = event.url.slice(lastLetterBeforeId+1, lastLetterBeforeId+event.url.length-1)
        if (this.data) {
          this.data.map((item, index) => {
            if (item.link === tabName) {
              this.productService.setTab(index)
              // this.activeTab = index
              // console.log('this.activeTab', this.activeTab)
              // console.log('index', index)
            } else if (item.link === '') {
              this.productService.setTab(0)
              // this.activeTab = 0
            }
          })
        }
    });
  }

  makeActive(i: number) {
    // this.productService.setTab(i)
  }
}
