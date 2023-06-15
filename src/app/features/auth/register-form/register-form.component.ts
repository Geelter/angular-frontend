import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { SupabaseAuthService } from '@core/services/supabase/supabase-auth.service';
import { NavigationService } from '@core/services/navigation.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['../auth-container/auth-container.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private supabaseAuth: SupabaseAuthService,
    private navigationService: NavigationService
  ) {}

  registerForm: FormGroup;

  isSubmitting = false;

  async onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      this.isSubmitting = true;

      const data = await this.supabaseAuth.register(username, email, password);

      if (data) {
        await this.navigationService.navigateToRoot();
      }

      this.isSubmitting = false;
    }
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (control && control instanceof FormGroup) {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      return password &&
        confirmPassword &&
        password.value === confirmPassword.value
        ? null
        : { passwordMismatch: true };
    }
    return null;
  };

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(22),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(22),
          ],
        ],
        terms: [false, Validators.requiredTrue],
      },
      { validators: this.passwordMatchValidator }
    );
  }
}
