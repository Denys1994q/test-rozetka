import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.sass']
})
export class AsideComponent {
  @Input() data!: any[]
  @Input() full!: boolean
  @Input() cabinet!: boolean

  openDialog() {

  }

}