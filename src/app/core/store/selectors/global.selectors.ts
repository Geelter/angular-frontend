import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from '@core/store/state/global.state';

export const featureKey = 'global';

export const selectGlobalState = createFeatureSelector<GlobalState>(featureKey);

export const selectError = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.error
);

export const selectFailedAction = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.failedAction
);
