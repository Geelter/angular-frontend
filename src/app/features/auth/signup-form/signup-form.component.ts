import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  @ViewChild('signUpForm') signUpForm: NgForm;

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
