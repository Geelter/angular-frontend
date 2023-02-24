import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string;
  authError: string;
}

const initialState: AuthState = {
  token: '',
  authError: '',
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginStart, (state) => ({
    ...state,
    token: '',
    authError: '',
  })),
  on(AuthActions.signupStart, (state) => ({
    ...state,
    token: '',
    authError: '',
  })),
  on(AuthActions.authenticateSuccess, (state, authSuccess) => ({
    ...state,
    token: authSuccess.token,
    authError: '',
  })),
  on(AuthActions.authenticateError, (state, authError) => ({
    ...state,
    token: '',
    authError: authError.error,
  }))
);
