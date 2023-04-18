import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import Dictionary from '@shared/dictionary';

export interface PlayerCharacter {
  id: number;
  name: string;
  user_id: string;
  character_avatar_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseCharactersService {
  constructor(private supabase: SupabaseService) {
    const _ = this.fetchPlayerCharacters();
  }

  private playerCharacters = new Dictionary<PlayerCharacter>();

  private async fetchPlayerCharacters(): Promise<Dictionary<PlayerCharacter>> {
    const { data: playerCharacters, error } = await this.supabase.client
      .from('player_character')
      .select('*');

    if (playerCharacters && !error) {
      for (const character of playerCharacters as PlayerCharacter[]) {
        this.playerCharacters.add(character.id.toString(), character);
      }
      console.table(this.playerCharacters);
      return this.playerCharacters;
    } else {
      throw 'Error fetching player characters';
    }
  }

  private playerCharactersCached() {
    return !!this.playerCharacters.size();
  }

  getPlayerCharacters(): Promise<Dictionary<PlayerCharacter>> {
    if (this.playerCharactersCached()) {
      return new Promise<Dictionary<PlayerCharacter>>(resolve => {
        resolve(this.playerCharacters);
      });
    }
    return this.fetchPlayerCharacters();
  }
}
