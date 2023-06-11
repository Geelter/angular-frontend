import { Action } from '@ngrx/store';

export interface GlobalState {
  error: Error | null;

  failedAction: Action | null;
}
