import { Injectable } from '@angular/core';
import { SearchResultsService } from 'src/app/search/services/search-results.service';
import { Comment } from 'src/app/shared/components/comment/comment.component';
// import { Observable, Subject, BehaviorSubject, tap, filter, map  } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class CommentsService {
    // відгуки
    comments!: Comment[]
    // відфільтровані відгуки
    filteredComments!: Comment[]
    // filteredComments$: Subject<Comment[]> = new Subject()
    // private filteredСommentsSubject: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);
    // filteredComments$ = this.filteredСommentsSubject.asObservable();
    // тип сортування
    sortType: string = 'З фото і відео'

    constructor(private SearchResultsService: SearchResultsService) {}
    
    setComments(comments: any) {
        this.comments = comments
        this.filteredComments = this.comments
        // this.filteredСommentsSubject.next(comments);
    }

    filterProdComments(selectedRaiting?: number) {
        if (selectedRaiting) {
          // const filteredComments = this.comments.filter((comment: any) => comment.rating === selectedRaiting)
          // this.filteredСommentsSubject.next(filteredComments)
          // this.filteredComments$.pipe(
          //   tap((data: any) => console.log(data))
          // ).subscribe()
          this.filteredComments = this.comments.filter((review: any) => review.rating === selectedRaiting)
          this.sortProdComments(this.sortType)
        } else {
          // this.filteredСommentsSubject.next(this.comments)
          this.filteredComments = this.comments
          this.sortProdComments(this.sortType)
          // скидаємо значення selectedRaitingIndex, яке в іншому сервісі знаходиться 
          this.SearchResultsService.resetRaitingValue()
        }
      }
  
      sortProdComments(sortType: string) {
        this.sortType = sortType
        if (sortType === 'З фото і відео') {
          this.filteredComments = [...this.filteredComments].sort((a,b) => {
            if ( a.photo){
              return -1;
            }
            if ( b.photo){
              return 1;
            }
            return 0;
          })
        } else if (sortType === 'За датою') {
          this.filteredComments = [...this.filteredComments].sort((a,b) => a.date - b.date)
        } else if (sortType === 'Найкорисніші') {
          this.filteredComments = [...this.filteredComments].sort((a,b) => (b.likes+b.dislikes) - (a.likes+a.dislikes))
        }
      }

      resetSortType() {
        this.sortType = 'З фото і відео'
      }
}