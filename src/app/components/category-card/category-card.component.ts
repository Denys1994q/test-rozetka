import { Component, Input } from '@angular/core';

export type CategoryItem = {
  title: string,
  img: string,
  subitems?: string[]
}

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.sass']
})
export class CategoryCardComponent {
  @Input() data!: CategoryItem
}
