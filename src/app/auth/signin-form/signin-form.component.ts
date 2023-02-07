import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  @ViewChild('signInForm') signInForm: NgForm;

  onSubmit() {
    console.log(this.signInForm.value);
  }
}
