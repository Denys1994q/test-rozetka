import { Component, Input } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.sass']
})
export class AsideComponent {
    @Input() data!: any[]
    @Input() full!: boolean
    @Input() cabinet!: boolean

    constructor(
        public modalService: ModalService,
        public authService: AuthService
    ) {}

    ngOnInit() {
    }

}