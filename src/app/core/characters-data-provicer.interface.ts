import { PlayerCharacter } from '@creator/models/player-character.model';

interface CharactersDataProvicer {
  fetchPlayerCharacters(): Promise<PlayerCharacter[]>;
}
