import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  showFooter: boolean = false
  constructor(private router: Router ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url !== '/') {
          this.showFooter = true
        } else {
          this.showFooter = false
        }
      });
  }

  ngOnInit(): void {

    // if (this.router.url === '/') {
    //   // console.log(this.router.url)
    //   this.showFooter = true
    // }
  }
  
}

