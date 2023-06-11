import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import Dictionary from '@shared/dictionary';
import { PlayerCharacter } from '@creator/models/player-character.model';
import { MsgService } from '@core/services/msg.service';
import * as supabaseConstants from '@assets/supabase-constants';

@Injectable({
  providedIn: 'root',
})
export class SupabaseCharactersService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {
    // const _ = this.fetchPlayerCharacters();
  }

  private playerCharacters = new Dictionary<PlayerCharacter>();

  private async fetchPlayerCharacters(): Promise<Dictionary<PlayerCharacter>> {
    try {
      const { data: playerCharacters, error } = await this.supabase.client
        .from(supabaseConstants.PLAYER_CHARACTER_TABLE)
        .select('*');

      if (error) {
        this.messageService.showError(
          'Error fetching player characters',
          error.message
        );
        throw new Error('Error fetching player characters');
      }

      if (playerCharacters) {
        for (const character of playerCharacters as PlayerCharacter[]) {
          this.playerCharacters.add(character.id.toString(), character);
        }
        console.table(this.playerCharacters);
      }
      return this.playerCharacters;
    } catch (error) {
      console.error(
        'Exception occurred while fetching player characters',
        error
      );
      throw error;
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
