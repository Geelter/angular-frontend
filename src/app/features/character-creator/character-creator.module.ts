import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { AttributeInputDirective } from './attribute-input.directive';
import { CharacterCreatorRoutingModule } from '@creator/character-creator-routing.module';
import { CharacterCreatorService } from '@creator/character-creator.service';
import { CreatorArchetypeComponent } from '@creator/components/steps/creator-archetype/creator-archetype.component';
import { CreatorAttributesComponent } from './components/steps/creator-attributes/creator-attributes.component';
import { CreatorContainerComponent } from '@creator/components/creator-container/creator-container.component';
import { CreatorDetailViewComponent } from '@creator/components/reusable/detail-view/creator-detail-view.component';
import { CreatorNameComponent } from './components/steps/creator-name/creator-name.component';
import { StepDataGuard } from '@creator/step-data.guard';

@NgModule({
  providers: [CharacterCreatorService, StepDataGuard],
  declarations: [
    AttributeInputDirective,
    CreatorArchetypeComponent,
    CreatorAttributesComponent,
    CreatorContainerComponent,
    CreatorDetailViewComponent,
    CreatorNameComponent,
  ],
  imports: [CharacterCreatorRoutingModule, CommonModule, SharedModule],
  exports: [CreatorContainerComponent],
})
export class CharacterCreatorModule {}
