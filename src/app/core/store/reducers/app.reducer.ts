import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '@core/store/state/app.state';
import { playerCharactersReducer } from './player-characters.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  playerCharacters: playerCharactersReducer,
};
