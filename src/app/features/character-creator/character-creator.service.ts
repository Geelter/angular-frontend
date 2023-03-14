import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';
import { StepData } from '@creator/step-data.guard';
import { dummyArchetypes } from '@assets/dummy-data/dummyArchetypes';
import { Router } from '@angular/router';

@Injectable()
export class CharacterCreatorService {
  constructor(
    private supabase: SupabaseService,
    private supabaseAuth: SupabaseAuthService,
    private router: Router
  ) {}
  chosenArchetypeIndex = 0;

  characterName = '';

  stepData: StepData;

  get characterDataComplete() {
    return !!this.chosenArchetype && !!this.characterName;
  }

  get chosenArchetype() {
    return this.stepData?.archetypes[this.chosenArchetypeIndex];
  }

  fetchStepData() {
    this.stepData = { archetypes: dummyArchetypes };
  }

  async submitCharacter() {
    const userID = await this.supabaseAuth.getUserID();

    if (!this.characterDataComplete || !userID) {
      return;
    }

    const { data, error } = await this.supabase.client
      .from('player_character')
      .insert({
        user_id: userID,
        name: this.characterName,
      })
      .select();

    if (!error && data) {
      const _ = this.router.navigate(['/']);
      return;
    } else {
      console.log('Error submitting the character. Try again.');
    }
  }
}
