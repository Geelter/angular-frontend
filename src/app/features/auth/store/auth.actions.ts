import { createAction, props } from '@ngrx/store';

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string }>()
);

export const signupStart = createAction(
  '[Auth] Signup Start',
  props<{
    email: string;
    password: string;
    passwordConfirmation: string;
    isTermsOfUseAccepted: boolean;
  }>()
);

export const authenticateSuccess = createAction(
  '[Auth] Authenticate Success',
  props<{
    token: string;
  }>()
);

export const authenticateError = createAction(
  '[Auth] Authenticate Error',
  props<{
    error: string;
  }>()
);

export const autoLogin = createAction('[Auth] Auto Login');
