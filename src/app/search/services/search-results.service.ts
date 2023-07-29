import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { categories } from 'src/app/data';

@Injectable({ providedIn: 'root' })

export class SearchResultsService {
    public resetPriceValue = new Subject();
    // всі можливі параметри пошуку на основі вибраних товарів
    searchParams: any = []
    // обрані параметри пошуку і їх опції 
    selectedInputs: any[] = []
    // товари 
    allCategories: any = JSON.parse(JSON.stringify(categories as any))
    currentCategoryIndex!: any
    currentSubcategoryIndex!: any
    currentCategory!: any
    currentSubcategory!: any
    // типи сортування 
    optionsToSort = [
        'За рейтингом',
        'Від дешевих до дорогих',
        'Від дорогих до дешевих',
        'Новинки'
    ]
    // позиція сортування
    sortType: string = this.optionsToSort[0]
    // base input
    baseInput!: string 
    // 
    selectedRaitingIndex!: any

    setBaseInput(val: string) {
        this.baseInput = val
    }

    resetSearchParams() {
        this.searchParams = []
    }

    // фільтрує всі параметри пошуку, залишаючи ті, які були вибрані 
    filterSearchParams(input: string) {
        let priceSearchParam = this.searchParams.find((item: any) => item.title === 'Ціна')
        let newStart = 0
        let newEnd = 0
        if (input.includes('грн')) {
            priceSearchParam.options[0].label = input
            const dashIdx = input.indexOf('-')
            const uahIdx = input.indexOf('грн')
            newStart = +input.slice(0, dashIdx-1)
            newEnd = +input.slice(dashIdx+1, uahIdx-1)
            priceSearchParam.options[0].newStart = +newStart
            priceSearchParam.options[0].newEnd = +newEnd
        } 
        // копія всіж можливих параметрів пошуку
        let copySearchParams = JSON.parse(JSON.stringify(this.searchParams))
        // об'єкт із параметрів пошуку, який додається
        let newOb = copySearchParams.find((param: any) => param.options.find((i: any) => i.label === input))
        // залишити тільки ті опції, які відповідають клікнутому інпуту
        // console.log(copySearchParams)
        newOb.options = newOb.options.filter((d: any) => d.label === input)
        // чи є такий об'єкт в this.selectedInputs
        const s = this.selectedInputs.find(selectedInput => selectedInput.searchPosition === newOb.searchPosition)
            // якщо такого об'єкту ще немає 
            if (!s) {
                // і немає такого інпута 
                if (!this.selectedInputs.find(k => k.options.find((s: any) => s.label === input))) {
                    this.selectedInputs.push(newOb)
                } 
            } 
            // якщо такий об'єкт є  
            else {
                if (!this.selectedInputs.find(k => k.options.find((s: any) => s.label === input))) {
                    if (s.title === 'Ціна') {
                        s.options[0].label = input
                        s.options[0].newStart = +newStart
                        s.options[0].newEnd = +newEnd
                    } else {
                        s.options.push({label: input, id: Math.random()})
                    }
                } 
            }
    }

    getCurrentCategory(id: string) {
        this.searchParams = []
        
        this.allCategories.map((category: any, categoryIndex: any) => {
            category.subCategories.find((subcategory: any, index: any) => {
              if (subcategory.id === id) {
                // отримуємо основну категорію (напр, "Смартфони, ТВ і електроника")
                this.currentCategory = category
                // отримуємо підкатегорію (напр, "Мобільні телефони")
                this.currentSubcategory = subcategory

                this.currentCategoryIndex = categoryIndex
                this.currentSubcategoryIndex = index
                
                this.createSearchParams(this.currentSubcategory)
              }
            })
        })
    }

    // ф-ія для генерації параметрів пошуку для ціни 
    createPriceSearchParams(subcategory: any) {
        let minPrice = 0
        let maxPrice = 0
        let prodPrices: any = []
        subcategory.products.map((product: any) => {
            prodPrices.push(product.searchStatus.find((it: any) => it.searchPosition === 'price').option.new)
            minPrice = Math.min(...prodPrices)
            maxPrice = Math.max(...prodPrices)
        })
        this.searchParams.push({searchPosition: 'price', title: 'Ціна', options: [{label: `${minPrice} - ${maxPrice} грн`, start: minPrice, end: maxPrice, id: Math.random()}] })
    }

    // ф-ія для генерації параметрів пошуку на основі списку товарів
    createSearchParams(subcategory: any) {
        // ось це додав, але треба умову... і тепер скасувати всі не працює 
        this.currentSubcategory.products = [...categories[this.currentCategoryIndex].subCategories[this.currentSubcategoryIndex].products] 

        this.searchParams = []

        this.createPriceSearchParams(subcategory)
        subcategory.products.map((product: any) => {
          product.searchStatus.map((searchItem: any) => {
            if (searchItem.option === false) {return}
            const fsearchItem = this.searchParams.find((item: any) => item.title === searchItem.title) 
            // якщо такий searchItem вже є, тоді треба перевірити чи співпадають options, якщо ні, доповнити
            if (fsearchItem) {
                if (searchItem.searchPosition === 'price') {return}
                if (!fsearchItem.options.find((s: any) => s.label === searchItem.option)) {
                    // нова опція 
                    const newsearchItemOption = {label: searchItem.option, id: Math.random()} 
                    // масив нових опкцій
                    const newOptions = [...fsearchItem.options, newsearchItemOption]
                    // заміняємо або додаємо 
                    this.searchParams = this.searchParams.map((searcParam: any) => {
                        if (searcParam.title === fsearchItem.title) {
                            return {...fsearchItem, options: newOptions}
                        }
                        return searcParam
                    })
                }
            } // якщо немає такого searchItem взагалі, додаємо  
            else { 
                const opt = []
                const newsearchItemOption = {label: searchItem.option, id: Math.random()} 
                opt.push(newsearchItemOption)
                this.searchParams.push({searchPosition: searchItem.searchPosition, title: searchItem.title, options: opt})
            }
          })
        })
    }

    // ф-ія для фільтрації даних 
    filterData() {
        this.currentSubcategory.products = [...categories[this.currentCategoryIndex].subCategories[this.currentSubcategoryIndex].products]  

        this.currentSubcategory.products = this.currentSubcategory.products.filter((prod: any) => {
            let foundedPositions = 0
            for (let i = 0; i < this.selectedInputs.length; i++) {
                prod.searchStatus.find((status: any) => {
                    if (this.selectedInputs[i].options.find((k: any) => k.label === status.option)) {
                        foundedPositions++
                    } else if (this.selectedInputs[i].title === 'Ціна' && (status.option.new >= this.selectedInputs[i].options[0].newStart && status.option.new <= this.selectedInputs[i].options[0].newEnd)) {
                        foundedPositions++
                    }
                }) 
                if (foundedPositions === this.selectedInputs.length) {
                    return prod
                }
            }
        })  
        this.sortData(this.sortType)
    }

    // додати інпут в список обраних для пошуку і фільтрувати
    addInput(input: string, selectedRaitingIndex?: any) {
        // якщо запускаємо сервіс зі сторінки відгуків продукту, розділу фільтрів 
        if (input.indexOf('Оцінка користувачів') > -1) {
            this.selectedRaitingIndex = selectedRaitingIndex
            this.selectedInputs = [{options: [{label: input}] }]
        }
        this.filterSearchParams(input)
        this.filterData()
    }

    // очистити весь список інпутів і фільтрувати
    removeAll() {
        this.selectedInputs = []
        this.baseInput = ''

        // if (this.currentCategoryIndex) {
        //     this.currentSubcategory.products = [...categories[this.currentCategoryIndex].subCategories[this.currentSubcategoryIndex].products] 
        // }

        this.currentSubcategory.products = [...categories[this.currentCategoryIndex].subCategories[this.currentSubcategoryIndex].products] 
          
        this.resetPriceValue.next(true)

        this.sortType = this.optionsToSort[0]
        if (this.currentSubcategory) {
            this.sortData(this.sortType)
        }
    }

    // видалити один інпут і фільтрувати
    removeOne(input: string) {
        if (input.includes('грн')) {
            this.resetPriceValue.next(true)
        }

        this.selectedInputs = this.selectedInputs.filter((selectedInput) => {
            if (selectedInput.options.find((option: any) => option.label !== input)) {
                selectedInput.options = selectedInput.options.filter((s: any) => s.label !== input)
                return selectedInput
            } 
        })
    
        this.filterData()

        if (this.selectedInputs.length === 0) {     
            this.currentSubcategory.products = [...categories[this.currentCategoryIndex].subCategories[this.currentSubcategoryIndex].products];  
            this.sortData(this.sortType)     
        }
    }

    sortData(sortType: string) {
        this.sortType = sortType
        if (sortType === 'За рейтингом') {
            this.currentSubcategory.products = [...this.currentSubcategory.products].sort((a: any,b: any) => b.reviews - a.reviews).sort((a: any,b: any) => b.raiting - a.raiting)
        } else if (sortType === 'Від дорогих до дешевих') {
            this.currentSubcategory.products = [...this.currentSubcategory.products].sort((a: any,b: any) => b.searchStatus.find((it: any) => it.searchPosition === 'price').option.new - a.searchStatus.find((it: any) => it.searchPosition === 'price' ).option.new)
        } else if (sortType === 'Від дешевих до дорогих') {
            this.currentSubcategory.products = [...this.currentSubcategory.products].sort((a: any,b: any) => a.searchStatus.find((it: any) => it.searchPosition === 'price' ).option.new - b.searchStatus.find((it: any) => it.searchPosition === 'price' ).option.new)
        } else if (sortType === 'Новинки') {
            this.currentSubcategory.products = [...this.currentSubcategory.products].sort((a: any,b: any) => a.date - b.date)
        }
    }

    resetRaitingValue() {
        this.selectedRaitingIndex = null
    }

}