import { PlayerCharacter } from '@creator/models/player-character.model';
import { EntityState } from '@ngrx/entity';

export interface PlayerCharactersState extends EntityState<PlayerCharacter> {
  currentUserCharacterID: number | null;

  chosenCharacterID: number | null;
}
