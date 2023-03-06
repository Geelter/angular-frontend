import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CharacterCreatorContainerComponent } from './components/character-creator-container/character-creator-container.component';

@NgModule({
  declarations: [CharacterCreatorContainerComponent],
  imports: [CommonModule, SharedModule],
  exports: [CharacterCreatorContainerComponent],
})
export class CharacterCreatorModule {}
