import { Component, Input } from '@angular/core';
import { Comment } from '../comment/comment.component';
import { ModalService } from 'src/app/modal.service';

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
