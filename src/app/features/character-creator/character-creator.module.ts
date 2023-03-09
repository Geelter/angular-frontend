import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CharacterCreatorContainerComponent } from '@creator/components/character-creator-container/character-creator-container.component';
import { CharacterCreatorRoutingModule } from '@creator/character-creator-routing.module';
import { CharacterCreatorDetailViewComponent } from '@creator/components/reusable/detail-view/character-creator-detail-view.component';
import { CharacterCreatorArchetypeComponent } from '@creator/components/steps/character-creator-archetype/character-creator-archetype.component';
import { CharacterCreatorService } from '@creator/character-creator.service';
import { CharacterCreatorNameComponent } from './components/steps/character-creator-name/character-creator-name.component';

@NgModule({
  providers: [CharacterCreatorService],
  declarations: [
    CharacterCreatorContainerComponent,
    CharacterCreatorDetailViewComponent,
    CharacterCreatorArchetypeComponent,
    CharacterCreatorNameComponent,
  ],
  imports: [CharacterCreatorRoutingModule, CommonModule, SharedModule],
  exports: [CharacterCreatorContainerComponent],
})
export class CharacterCreatorModule {}
