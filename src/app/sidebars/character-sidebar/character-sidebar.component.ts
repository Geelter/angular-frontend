import { Component } from '@angular/core';
import { dummyCharacterData } from './character-data.model';

@Component({
  selector: 'app-character-sidebar',
  templateUrl: 'character-sidebar.component.html',
  styleUrls: ['character-sidebar.component.scss'],
})
export class CharacterSidebarComponent {
  dummyCharacterData = dummyCharacterData;
  healthPercentage =
    (dummyCharacterData.currentHealthPoints /
      dummyCharacterData.maxHealthPoints) *
    100;

  experiencePercentage =
    (dummyCharacterData.currentExperience /
      dummyCharacterData.experienceToNextLevel) *
    100;
}
