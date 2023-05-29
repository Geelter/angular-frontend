import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@creator/models/player-character.model';

export interface PlayerCharactersState {
  playerCharacters: Dictionary<PlayerCharacter>;
  currentPlayerCharacter: undefined | null | PlayerCharacter;
}
