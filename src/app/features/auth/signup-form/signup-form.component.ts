import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  @ViewChild('signUpForm') signUpForm: NgForm;

  onSubmit() {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;

      console.log('Email: ' + email + ' Password: ' + password);
      this.supabaseAuth
        .register(email, password)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  constructor(private supabaseAuth: SupabaseAuthService) {}
}
