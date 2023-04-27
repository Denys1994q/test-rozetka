import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass']
})
export class LoginModalComponent {
  inputType = 'password'
  email = ''
  password: any = ''

  constructor(private modalService: ModalService) {}

  register (myForm: NgForm) {
    console.log(111)
  }

  closeDialog() {
    this.modalService.closeDialog()
  }

  openRegisterDialog() {
    this.modalService.closeDialog()
    this.modalService.openDialog('register')
  }

  showPassword() {
    this.inputType = 'text'
  }

  hidePassword() {
    this.inputType = 'password'
  }
 }
