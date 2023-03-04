import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  @ViewChild('registerForm') registerForm: NgForm;
  email = '';
  password = '';
  passwordConfirm = '';

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      this.supabaseAuth.register(email, password);
    }
  }

  constructor(private supabaseAuth: SupabaseAuthService) {}
}
