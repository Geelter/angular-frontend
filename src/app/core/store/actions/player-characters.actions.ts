import { createAction, props } from '@ngrx/store';
import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@core/services/supabase-characters.service';

export const fetchCharacters = createAction('[Player Characters] Fetch');
export const saveCharacters = createAction(
  '[Player Characters] Save',
  props<{ playerCharacters: Dictionary<PlayerCharacter> }>
);
