import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';
import { NavigationService } from '@core/services/navigation.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../auth-container/auth-container.component.scss'],
})
export class RegisterFormComponent {
  @ViewChild('registerForm') registerForm: NgForm;

  isSubmitting = false;

  async onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.isSubmitting = true;

      const data = await this.supabaseAuth.register(email, password);

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
