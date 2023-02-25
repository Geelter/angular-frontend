import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { LoginFormComponent } from './signin-form/login-form.component';
import { RegisterFormComponent } from './signup-form/register-form.component';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoginFormComponent, RegisterFormComponent],
})
export class AuthModule {}
