import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterCreatorContainerComponent } from '@creator/components/character-creator-container/character-creator-container.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterCreatorContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterCreatorRoutingModule {}
