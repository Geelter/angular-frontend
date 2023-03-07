import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CharacterCreatorContainerComponent } from './components/character-creator-container/character-creator-container.component';
import { CharacterCreatorRoutingModule } from '@creator/character-creator-routing.module';
import { CharacterCreatorDetailViewComponent } from './components/reusable/detail-view/character-creator-detail-view.component';
import { CharacterCreatorArchetypeComponent } from './components/steps/character-creator-archetype/character-creator-archetype.component';

@NgModule({
  declarations: [
    CharacterCreatorContainerComponent,
    CharacterCreatorDetailViewComponent,
    CharacterCreatorArchetypeComponent,
  ],
  imports: [CharacterCreatorRoutingModule, CommonModule, SharedModule],
  exports: [CharacterCreatorContainerComponent],
})
export class CharacterCreatorModule {}
