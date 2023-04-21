import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase.service';
import { SupabaseAuthService } from '@core/services/supabase-auth.service';
import { characterCreatorSteps } from '@creator/character-creator-steps';
import { Archetype } from '@creator/models/archetype';
import { Attribute } from '@creator/models/attribute';
import { AttributesConfig } from '@creator/models/attributes-config';
import Dictionary from '@shared/dictionary';

@Injectable()
export class CharacterCreatorService {
  constructor(
    private supabase: SupabaseService,
    private supabaseAuth: SupabaseAuthService
  ) {
    this.fetchStepData();
    this.fetchStepRoutes();
  }
  chosenArchetypeID = 0;

  characterName = '';

  stepRoutes: string[][];

  private characterArchetypes = new Dictionary<Archetype>();

  private attributesConfig: AttributesConfig;

  private characterAttributes: Attribute[] = [];

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
