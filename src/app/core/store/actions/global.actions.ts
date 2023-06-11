import { Action, createAction, props } from '@ngrx/store';

export const actionError = createAction(
  '[App] Action Error',
  props<{ error: Error; action: Action }>()
);

export const clearActionError = createAction('[App] Clear Action Error');
