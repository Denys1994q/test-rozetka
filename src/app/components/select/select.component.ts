import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent {
  @Input() options!: string[]
  @Input() name!: string
  selectValue: string = 'За рейтингом'
  @Output() selectChange = new EventEmitter<string>();

  ngOnInit() {
    this.selectChange.emit(this.selectValue)
  }

  onSelectChange() {
    this.selectChange.emit(this.selectValue)
  }
}
