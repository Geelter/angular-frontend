import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from '@auth/auth-container/auth-container.component';
import { LoginFormComponent } from '@auth/login-form/login-form.component';
import { RegisterFormComponent } from '@auth/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'register',
        component: RegisterFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
