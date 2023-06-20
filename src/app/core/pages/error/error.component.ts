import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent {
  constructor(private router: Router ) {

  }
  ngOnInit(): void {
    // console.log(this.router.url)
    if (this.router.url === '/') {
      // console.log(this.router.url)
      // this.showFooter = true
    }
  }
}
