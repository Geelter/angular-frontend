import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PlayerCharacter } from '@creator/models/player-character.model';
import { PlayerCharactersState } from '@core/store/state/player-characters.state';
import * as playerCharactersActions from '../actions/player-characters.actions';

export const adapter: EntityAdapter<PlayerCharacter> =
  createEntityAdapter<PlayerCharacter>({
    sortComparer: false,
  });

export const initialState: PlayerCharactersState = adapter.getInitialState({
  currentUserCharacterID: null,
  chosenCharacterID: null,
});

export const playerCharactersReducer = createReducer(initialState);
