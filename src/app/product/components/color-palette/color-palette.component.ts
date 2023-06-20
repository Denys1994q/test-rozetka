import { Component } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.sass']
})
export class ColorPaletteComponent {
// color нехай з АPI приходить
clickedIndex = 0
colors = [
  {name: 'Black', palette: 'rgb(0, 0, 0)'},
  {name: 'Blue', palette: 'rgb(51, 153, 255'},
  {name: 'Green', palette: 'rgb(51, 153, 0)'},
  {name: 'Purple', palette: 'rgb(255, 153, 204)'},
  {name: 'Red', palette: 'rgb(204, 0, 0)'},
]

setColor(i: number) {
  this.clickedIndex = i
}
}
