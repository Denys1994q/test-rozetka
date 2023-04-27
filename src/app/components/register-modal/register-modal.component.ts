import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.sass']
})
export class RegisterModalComponent {
  constructor(private modalService: ModalService) {}

  inputType = 'password'
  name = ''
  surname = ''
  phone = ''
  email = ''
  password: any = ''

  // закрити модалку
  register (myForm: NgForm) {
    // console.log(this.name);
    // console.log(this.surname);
    // console.log(this.phone);
    // console.log(this.email);
    // console.log(this.password);
  }

  closeDialog() {
    this.modalService.closeDialog()
  }

  showPassword() {
    this.inputType = 'text'
  }

  hidePassword() {
    this.inputType = 'password'
  }

  openDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('login')
  }
}
