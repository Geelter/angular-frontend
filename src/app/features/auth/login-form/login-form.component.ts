import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase/supabase-auth.service';
import { NavigationService } from '@core/services/navigation.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../auth-container/auth-container.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') loginForm: NgForm;

  isSubmitting = false;

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.isSubmitting = true;

      const data = await this.supabaseAuth.login(email, password);

      if (data) {
        await this.navigationService.navigateToRoot();
      }

      this.isSubmitting = false;
    }
  }

  constructor(
    private supabaseAuth: SupabaseAuthService,
    private navigationService: NavigationService
  ) {}
}
