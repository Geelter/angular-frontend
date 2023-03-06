import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CharacterCreatorContainerComponent } from './components/character-creator-container/character-creator-container.component';
import { CharacterCreatorRoutingModule } from '@creator/character-creator-routing.module';

@NgModule({
  declarations: [CharacterCreatorContainerComponent],
  imports: [CharacterCreatorRoutingModule, CommonModule, SharedModule],
  exports: [CharacterCreatorContainerComponent],
})
export class CharacterCreatorModule {}
