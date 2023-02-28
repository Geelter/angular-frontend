import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  @ViewChild('registerForm') registerForm: NgForm;

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

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
