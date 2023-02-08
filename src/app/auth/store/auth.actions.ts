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
