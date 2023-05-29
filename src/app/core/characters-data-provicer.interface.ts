import { PlayerCharacter } from '@core/services/supabase-characters.service';

interface CharactersDataProvicer {
  fetchPlayerCharacters(): Promise<PlayerCharacter[]>;
}
