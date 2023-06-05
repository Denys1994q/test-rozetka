import { Component, Input, OnInit } from '@angular/core';

interface AlphabetItem {
  label: string,
  id: string
}

interface AlphabetObj {
  letter: string,
  items: AlphabetItem[]
}

@Component({
  selector: 'app-alphabet-block',
  templateUrl: './alphabet-block.component.html',
  styleUrls: ['./alphabet-block.component.sass']
})
export class AlphabetBlockComponent implements OnInit {
  @Input() data!: AlphabetItem[]

  showBlock: boolean = false
  firstLetters: string[] = []
  alphabetArr: AlphabetObj[] = []

  setShowBlock = () => {
    this.showBlock = !this.showBlock
  }

  ngOnInit(): void {
    const copyData = [...this.data]

    this.data.map((it: AlphabetItem) => {
      if (this.firstLetters.indexOf(it.label.charAt(0)) === -1) {
        this.firstLetters.push(it.label.charAt(0))
        this.firstLetters.sort((a: string,b: string) => {            
          if (a < b) {
          return -1;
          }
          if (a > b) {
          return 1;
          }
          return 0})
      }
    })

    const arr: any = []
    this.firstLetters.map((lette: string) => {
      const obj = {letter: lette, items: []}
      arr.push(obj)
    })
    copyData.map(it => {
      this.firstLetters.map((lette: string, index: number) => {
        if (it.label.charAt(0) === lette) {
          arr[index].items.push(it)
        }
      })
    })
    this.alphabetArr = arr
  }

  // треба фільтрувати 
  addItem(newItem: any) {
    this.alphabetArr = this.alphabetArr.filter(item => item.letter === 'B')
    // this.alphabetArr.filter(item => item.items.filter(it => it.label.includes(newItem)))
   console.log(newItem);
  }

}
