import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  @ViewChild('signInForm') signInForm: NgForm;

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;

      console.log('Email: ' + email + ' Password: ' + password);
      this.supabaseAuth
        .login(email, password)
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
