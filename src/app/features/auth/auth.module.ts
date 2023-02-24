import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [SigninFormComponent, SignupFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [SigninFormComponent, SignupFormComponent],
})
export class AuthModule {}
