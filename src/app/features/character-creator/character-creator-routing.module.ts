import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatorContainerComponent } from '@creator/components/creator-container/creator-container.component';
import { CreatorArchetypeComponent } from '@creator/components/steps/creator-archetype/creator-archetype.component';
import { CreatorNameComponent } from '@creator/components/steps/creator-name/creator-name.component';
import { StepDataGuard } from '@creator/step-data.guard';
import { CreatorAttributesComponent } from '@creator/components/steps/creator-attributes/creator-attributes.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [StepDataGuard],
    component: CreatorContainerComponent,
    children: [
      {
        path: 'archetype',
        component: CreatorArchetypeComponent,
      },
      {
        path: 'attributes',
        component: CreatorAttributesComponent,
      },
      {
        path: 'name',
        component: CreatorNameComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterCreatorRoutingModule {}
