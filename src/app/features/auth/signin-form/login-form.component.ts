import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../auth-container/auth-container.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') loginForm: NgForm;

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.supabaseAuth.login(email, password);
    }
  }

  constructor(private supabaseAuth: SupabaseAuthService) {}
}
