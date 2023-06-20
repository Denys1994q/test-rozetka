import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SearchResultsService {
    // обрані інпути
    selectedInputs: string[] = []

    // додати інпут в список обраних для пошуку
    addInput(input: string) {
        if (this.selectedInputs.indexOf(input) === -1) {
            this.selectedInputs.push(input) 
        } else {
            this.selectedInputs = this.selectedInputs.filter(inp => inp !== input)
        }
    }
    // очистити весь список інпутів
    removeAll() {
        this.selectedInputs = []
    }
    // очистити один інпут
    removeOne(input: string) {
        this.selectedInputs = this.selectedInputs.filter(item => item !== input)
    }
}