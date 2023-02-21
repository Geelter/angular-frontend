import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { HttpClient } from '@angular/common/http';

export interface AuthResponseData {
  token: string;
}

const handleAuthentication = (token: string) => {
  localStorage.setItem('authToken', token);

  return AuthActions.authenticateSuccess({
    token: token,
  });
};

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  authLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart),
      switchMap((loginStart) => {
        return this.http
          .post<AuthResponseData>('login_check', {
            email: loginStart.email,
            password: loginStart.password,
          })
          .pipe(
            map((responseData) => {
              return handleAuthentication(responseData.token);
            }),
            catchError(() =>
              of(AuthActions.authenticateError({ error: 'error string' }))
            )
          );
      })
    )
  );

  authSignup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signupStart),
      switchMap((signupStart) => {
        return this.http
          .post<AuthResponseData>('auth/register', {
            email: signupStart.email,
            password: signupStart.password,
            passwordConfirmation: signupStart.passwordConfirmation,
            isTermsOfUseAccepted: signupStart.isTermsOfUseAccepted,
          })
          .pipe(
            map((responseData) => {
              return handleAuthentication(responseData.token);
            }),
            catchError(() =>
              of(AuthActions.authenticateError({ error: 'error string' }))
            )
          );
      })
    )
  );

  authAutoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
          return handleAuthentication(token);
        }
        return { type: 'EMPTY' };
      })
    )
  );
}
