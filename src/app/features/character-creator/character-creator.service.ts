import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';
import { StepData } from '@creator/step-data.guard';
import { dummyArchetypes } from '@assets/dummy-data/dummyArchetypes';
import { characterCreatorSteps } from '@creator/character-creator-steps';

@Injectable()
export class CharacterCreatorService {
  constructor(
    private supabase: SupabaseService,
    private supabaseAuth: SupabaseAuthService
  ) {
    this.fetchStepData();
    this.fetchStepRoutes();
  }
  chosenArchetypeIndex = 0;

  characterName = '';

  stepRoutes: string[][];

  stepData: StepData;

  get characterDataComplete() {
    return !!this.chosenArchetype && !!this.characterName;
  }

  get chosenArchetype() {
    return this.stepData?.archetypes[this.chosenArchetypeIndex];
  }

  fetchStepData() {
    this.stepData = {
      archetypes: dummyArchetypes,
      attributeConfig: {
        maximumValue: 2,
        minimumValue: -2,
        sumValue: 0,
        initialValue: 0,
      },
      attributes: {
        passive: [
          {
            name: 'Fortitude',
            id: 1,
            value: 0,
          },
          {
            name: 'Willpower',
            id: 2,
            value: 0,
          },
          {
            name: 'Reflexes',
            id: 3,
            value: 0,
          },
        ],
        active: [
          {
            name: 'Reasoning',
            id: 4,
            value: 0,
          },
          {
            name: 'Perception',
            id: 5,
            value: 0,
          },
          {
            name: 'Intuition',
            id: 6,
            value: 0,
          },
        ],
      },
    };
  }

  fetchStepRoutes() {
    this.stepRoutes = characterCreatorSteps;
  }

  getRoutesForStep(number: number): string[][] {
    return [this.stepRoutes[number - 1], this.stepRoutes[number + 1]];
  }

  async submitCharacter(): Promise<boolean> {
    const userID = await this.supabaseAuth.getUserID();

    if (!this.characterDataComplete || !userID) {
      return false;
    }

    const { error } = await this.supabase.client
      .from('player_character')
      .insert({
        user_id: userID,
        name: this.characterName,
      });

    return !error;
  }
}
