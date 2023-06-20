import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchResultsService } from 'src/app/search/services/search-results.service';

@Component({
  selector: 'app-search-result-btn',
  templateUrl: './search-result-btn.component.html',
  styleUrls: ['./search-result-btn.component.sass']
})
export class SearchResultBtnComponent {
  @Input() cancelBtn: boolean = false
  @Input() text!: string 

  constructor(private SearchResultsService: SearchResultsService) {}

  cancelAll() {
    this.SearchResultsService.removeAll()
  }

  cancelOne(input: string) {
    this.SearchResultsService.removeOne(input)
  }
}
