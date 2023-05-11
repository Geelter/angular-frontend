import { ActionReducerMap } from '@ngrx/store';

import * as fromPlayerCharacters from './player-characters.reducer';

export interface AppState {
  playerCharacters: fromPlayerCharacters.PlayerCharactersState;
}

export const appReducer: ActionReducerMap<AppState> = {
  playerCharacters: fromPlayerCharacters.playerCharactersReducer,
};
