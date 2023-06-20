import { Component, Input } from '@angular/core';
import { Comment } from '../../../shared/components/comment/comment.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-comments-panel',
  templateUrl: './comments-panel.component.html',
  styleUrls: ['./comments-panel.component.sass']
})
export class CommentsPanelComponent {

  constructor(private modalService: ModalService) {}

  @Input() comments!: Comment[]
  @Input() withFilters: boolean = false

  openDialog(type: string) {
    this.modalService.openDialog(type)
  }
  
}
