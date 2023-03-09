import { Injectable } from '@angular/core';
import { dummyArchetypes } from '@assets/dummy-data/dummyArchetypes';

@Injectable()
export class CharacterCreatorService {
  chosenArchetypeIndex = 0;

  characterName = '';

  archetypes = dummyArchetypes;

  get characterDataComplete() {
    return !!this.chosenArchetype && !!this.characterName;
  }

  get chosenArchetype() {
    return this.archetypes[this.chosenArchetypeIndex];
  }
}
