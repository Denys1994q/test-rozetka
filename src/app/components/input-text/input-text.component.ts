import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.sass']
})
export class InputTextComponent {
  text = ''

  resetValue() {
    this.text = ''
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(event: any) {
    // this.newItemEvent.emit(this.text);
    this.newItemEvent.emit(event.target.value);
  }
}
