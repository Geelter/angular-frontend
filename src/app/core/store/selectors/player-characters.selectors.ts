import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerCharactersState } from '@core/store/state/player-characters.state';
import { adapter } from '@core/store/reducers/player-characters.reducer';

export const featureKey = 'playerCharacters';

export const selectPlayerCharactersState =
  createFeatureSelector<PlayerCharactersState>(featureKey);

export const {
  selectIds: selectPlayerCharactersIDs,
  selectEntities: selectPlayerCharacterEntities,
  selectAll: selectAllPlayerCharacters,
  selectTotal: selectTotalPlayerCharacters,
} = adapter.getSelectors(selectPlayerCharactersState);

export const selectCurrentUserCharacter = createSelector(
  selectPlayerCharactersState,
  (state: PlayerCharactersState) => {
    if (state.currentUserCharacterID) {
      return state.entities[state.currentUserCharacterID];
    }
    return null;
  }
);
