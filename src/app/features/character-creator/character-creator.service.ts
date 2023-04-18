import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';
import { StepData } from '@creator/models/step-data';
import { dummyStepData } from '@assets/dummy-data/dummyStepData';
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
    this.stepData = dummyStepData;
  }

  attributeSumCorrect = true;

  get attributesSum(): number {
    let attributesSum = 0;
    const attributes = this.stepData.attributes;

    for (const passive of attributes.passive) {
      attributesSum -= passive.value;
    }

    for (const active of attributes.active) {
      attributesSum -= active.value;
    }

    this.attributeSumCorrect =
      attributesSum === this.stepData.attributeConfig.sumValue;

    return attributesSum;
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
