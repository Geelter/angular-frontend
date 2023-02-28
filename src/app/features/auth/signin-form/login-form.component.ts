import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @ViewChild('loginForm') loginForm: NgForm;

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      console.log('Email: ' + email + ' Password: ' + password);
      this.supabaseAuth
        .login(email, password)
        .then(user => {
          console.log(user);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  constructor(private supabaseAuth: SupabaseAuthService) {}
}
