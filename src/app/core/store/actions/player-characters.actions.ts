import { createAction, props } from '@ngrx/store';
import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@creator/models/player-character.model';

export const fetchCharacterForCurrentUser = createAction(
  '[Player Characters] Fetch Current User Character'
);
export const fetchCharactersForIDArray = createAction(
  '[Player Characters] Fetch Characters',
  props<{ playerCharacterIDArray: string[] }>
);
export const saveCharacters = createAction(
  '[Player Characters] Save Characters',
  props<{ playerCharacters: PlayerCharacter[] }>
);
