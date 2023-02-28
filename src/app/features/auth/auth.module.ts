import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { AuthContainerComponent } from '@auth/auth-container/auth-container/auth-container.component';
import { LoginFormComponent } from './signin-form/login-form.component';
import { RegisterFormComponent } from './signup-form/register-form.component';

@NgModule({
  declarations: [
    AuthContainerComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [AuthContainerComponent],
})
export class AuthModule {}
