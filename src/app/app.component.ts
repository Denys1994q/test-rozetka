import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  showFooter: boolean = false

  constructor(private router: Router, private authService: AuthService ) {
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
      this.authService.getUser().subscribe({
        next: response => {
          console.log(response)
        },
        error: (error) => {
          console.log('Помилка при виконанні запиту:', error.error.message);
        }
      })
  }

}

