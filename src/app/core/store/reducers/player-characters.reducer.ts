import { createReducer, on } from '@ngrx/store';
import { saveCharacters } from '@core/store/actions/player-characters.actions';
import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@core/services/supabase-characters.service';

export interface PlayerCharactersState {
  playerCharacters: Dictionary<PlayerCharacter>;
}

export const initialState: PlayerCharactersState = {
  playerCharacters: new Dictionary<PlayerCharacter>(),
};

export const playerCharactersReducer = createReducer(
  initialState,
  on(
    saveCharacters,
    (state, saveCharacters): PlayerCharactersState => ({
      playerCharacters: saveCharacters._p.playerCharacters,
    })
  )
);
