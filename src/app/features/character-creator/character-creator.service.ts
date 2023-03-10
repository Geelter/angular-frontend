import { Injectable } from '@angular/core';
import { dummyArchetypes } from '@assets/dummy-data/dummyArchetypes';
import { SupabaseService } from '@core/services/supabase.service';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';

@Injectable()
export class CharacterCreatorService {
  constructor(
    private supabase: SupabaseService,
    private supabaseAuth: SupabaseAuthService
  ) {}
  chosenArchetypeIndex = 0;

  characterName = '';

  archetypes = dummyArchetypes;

  get characterDataComplete() {
    return !!this.chosenArchetype && !!this.characterName;
  }

  get chosenArchetype() {
    return this.archetypes[this.chosenArchetypeIndex];
  }

  async submitCharacter() {
    const userID = await this.supabaseAuth.getUserID();
    if (this.characterDataComplete && userID) {
      console.log(userID);
      const { data, error } = await this.supabase.client
        .from('player_character')
        .insert({
          user_id: userID,
          name: this.characterName,
        })
        .select();
      console.log(data);
      console.log(error);
    } else {
      console.log('Missing required character data');
    }
  }
}
