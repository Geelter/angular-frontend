import { createReducer, on } from '@ngrx/store';
import { GlobalState } from '@core/store/state/global.state';
import * as globalActions from '@core/store/actions/global.actions';

export const initialState: GlobalState = {
  error: null,

  failedAction: null,
};

export const globalReducer = createReducer(
  initialState,
  on(globalActions.actionError, (state, { error, action }) => {
    return {
      ...state,
      error: error,
      failedAction: action,
    };
  }),
  on(globalActions.clearActionError, state => {
    return {
      ...state,
      error: null,
      failedAction: null,
    };
  })
);
