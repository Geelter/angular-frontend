import { createReducer, on } from '@ngrx/store';
import { saveCharacters } from '@core/store/actions/player-characters.actions';
import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@creator/models/player-character.model';
import { PlayerCharactersState } from '@core/store/state/player-characters.state';

export const initialState: PlayerCharactersState = {
  playerCharacters: new Dictionary<PlayerCharacter>(),
  currentPlayerCharacter: undefined,
};

export const playerCharactersReducer = createReducer(
  initialState,
  on(saveCharacters, (state, { playerCharacters }) => ({
    playerCharacters: saveCharacters._p.playerCharacters,
  }))
);
