import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CreatorContainerComponent } from '@creator/components/creator-container/creator-container.component';
import { CharacterCreatorRoutingModule } from '@creator/character-creator-routing.module';
import { CreatorDetailViewComponent } from '@creator/components/reusable/detail-view/creator-detail-view.component';
import { CreatorArchetypeComponent } from '@creator/components/steps/creator-archetype/creator-archetype.component';
import { CharacterCreatorService } from '@creator/character-creator.service';
import { CreatorNameComponent } from './components/steps/creator-name/creator-name.component';
import { StepDataGuard } from '@creator/step-data.guard';

@NgModule({
  providers: [CharacterCreatorService, StepDataGuard],
  declarations: [
    CreatorContainerComponent,
    CreatorDetailViewComponent,
    CreatorArchetypeComponent,
    CreatorNameComponent,
  ],
  imports: [CharacterCreatorRoutingModule, CommonModule, SharedModule],
  exports: [CreatorContainerComponent],
})
export class CharacterCreatorModule {}
