import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterCreatorContainerComponent } from '@creator/components/character-creator-container/character-creator-container.component';
import { CharacterCreatorArchetypeComponent } from '@creator/components/steps/character-creator-archetype/character-creator-archetype.component';
import { CharacterCreatorNameComponent } from '@creator/components/steps/character-creator-name/character-creator-name.component';
import { StepDataGuard } from '@creator/step-data.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [StepDataGuard],
    component: CharacterCreatorContainerComponent,
    children: [
      {
        path: 'archetype',
        component: CharacterCreatorArchetypeComponent,
      },
      {
        path: 'name',
        component: CharacterCreatorNameComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterCreatorRoutingModule {}
