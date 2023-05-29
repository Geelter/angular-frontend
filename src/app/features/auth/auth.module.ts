import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { AuthContainerComponent } from '@auth/auth-container/auth-container.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';

@NgModule({
  declarations: [
    AuthContainerComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  exports: [AuthContainerComponent],
})
export class AuthModule {}
