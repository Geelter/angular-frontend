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

  submitCharacter() {
    if (this.characterDataComplete) {
      console.log(
        'Chosen archetype is ' + dummyArchetypes[this.chosenArchetypeIndex].name
      );
      console.log('Chosen character name is ' + this.characterName);
    } else {
      console.log('Missing required character data');
    }
  }
}
