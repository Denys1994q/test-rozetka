import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characteristics-block',
  templateUrl: './characteristics-block.component.html',
  styleUrls: ['./characteristics-block.component.sass']
})
export class CharacteristicsBlockComponent {
  @Input() limited: boolean = false
  @Input() full: boolean = false
  @Input() productTitle!: any
  @Input() textArray!: any
  @Input() link!: string
}
