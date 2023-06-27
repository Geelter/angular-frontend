import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { SupabaseAuthService } from '@core/services/supabase/supabase-auth.service';
import { characterCreatorSteps } from '@creator/character-creator-steps';
import { Archetype } from '@creator/models/archetype.model';
import { Attribute } from '@creator/models/attribute.model';
import { AttributesConfig } from '@creator/models/attributes-config.model';
import Dictionary from '@shared/dictionary';

@Injectable()
export class CharacterCreatorService {
  constructor(
    private supabase: SupabaseService,
    private supabaseAuth: SupabaseAuthService
  ) {
    // this.fetchStepRoutes();
    //
    // this.fetchCharacterArchetypes();
    // this.fetchAttributesConfig();
    // this.fetchAttributes();
  }
  chosenArchetypeID = 0;

  characterName = '';

  stepRoutes: string[][];

  private characterArchetypes = new Dictionary<Archetype>();

  private attributesConfig: AttributesConfig;

  private characterAttributes: Attribute[] = [];

  // get characterDataComplete() {
  //   return !!this.chosenArchetype && !!this.characterName;
  // }
  //
  // get chosenArchetype() {
  //   return this.characterArchetypes.getItem(this.chosenArchetypeID.toString());
  // }
  //
  // fetchStepRoutes() {
  //   this.stepRoutes = characterCreatorSteps;
  // }
  //
  // private async fetchCharacterArchetypes(): Promise<Dictionary<Archetype>> {
  //   const { data: characterArchetypes, error } = await this.supabase.client
  //     .from('character_archetype')
  //     .select('*');
  //
  //   if (characterArchetypes && !error) {
  //     const archetypes = characterArchetypes as Archetype[];
  //     for (const archetype of archetypes) {
  //       this.characterArchetypes.add(archetype.id.toString(), archetype);
  //     }
  //     return this.characterArchetypes;
  //   } else {
  //     throw 'Error fetching character archetypes';
  //   }
  // }
  //
  // private characterArchetypesCached() {
  //   return !!this.characterArchetypes.size();
  // }
  //
  // getCharacterArchetypes(): Promise<Dictionary<Archetype>> {
  //   if (this.characterArchetypesCached()) {
  //     return new Promise<Dictionary<Archetype>>(resolve => {
  //       resolve(this.characterArchetypes);
  //     });
  //   }
  //   return this.fetchCharacterArchetypes();
  // }
  //
  // private async fetchAttributesConfig(): Promise<AttributesConfig> {
  //   const { data: character_creator_config, error } = await this.supabase.client
  //     .from('character_creator_config')
  //     .select('*');
  //
  //   if (character_creator_config && !error) {
  //     const config = character_creator_config[0] as AttributesConfig;
  //     this.attributesConfig = config;
  //     return config;
  //   } else {
  //     throw 'Error fetching attributes config';
  //   }
  // }
  //
  // private attributesConfigCached() {
  //   return !!this.attributesConfig;
  // }
  //
  // getAttributesConfig(): Promise<AttributesConfig> {
  //   if (this.attributesConfigCached()) {
  //     return new Promise<AttributesConfig>(resolve => {
  //       resolve(this.attributesConfig);
  //     });
  //   }
  //   return this.fetchAttributesConfig();
  // }
  //
  // private async fetchAttributes(): Promise<Attribute[]> {
  //   const attributesConfig: AttributesConfig = await this.getAttributesConfig();
  //
  //   const { data: characterAttributes, error } = await this.supabase.client
  //     .from('character_attribute')
  //     .select('*');
  //
  //   if (characterAttributes && !error) {
  //     const attributes = characterAttributes as Attribute[];
  //     for (const attribute of attributes) {
  //       attribute.value = attributesConfig.attribute_initial_value;
  //     }
  //     this.characterAttributes = attributes;
  //     return attributes;
  //   } else {
  //     throw 'Error fetching character attributes';
  //   }
  // }
  //
  // private attributesCached() {
  //   return !!this.characterAttributes.length;
  // }
  //
  // getAttributes(): Promise<Attribute[]> {
  //   if (this.attributesCached()) {
  //     return new Promise<Attribute[]>(resolve => {
  //       resolve(this.characterAttributes);
  //     });
  //   }
  //   return this.fetchAttributes();
  // }
  //
  // getRoutesForStep(number: number): string[][] {
  //   return [this.stepRoutes[number - 1], this.stepRoutes[number + 1]];
  // }
  //
  // async submitCharacter(): Promise<boolean> {
  //   const userID = await this.supabaseAuth.getCurrentUserID();
  //
  //   if (!this.characterDataComplete || !userID) {
  //     return false;
  //   }
  //
  //   const { error } = await this.supabase.client
  //     .from('player_character')
  //     .insert({
  //       user_id: userID,
  //       name: this.characterName,
  //     });
  //
  //   return !error;
  // }
}
