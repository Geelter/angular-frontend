import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: GameComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'auth',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: SigninFormComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: SignupFormComponent,
  //     },
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
