import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';

@Component({
  selector: 'app-creator-archetype',
  templateUrl: './creator-archetype.component.html',
  styleUrls: ['./creator-archetype.component.scss'],
})
export class CreatorArchetypeComponent {
  constructor(
    private router: Router,
    public creatorService: CharacterCreatorService
  ) {
    [this.exitRoute, this.nextStepRoute] = this.creatorService.getRoutesForStep(
      this.stepNumber
    );
  }

  private stepNumber = 1;

  private exitRoute: string[];

  private nextStepRoute: string[];

  nextStep() {
    this.router.navigate(this.nextStepRoute);
  }

  exitCreator() {
    this.router.navigate(this.exitRoute);
  }

  chooseArchetype(index: number) {
    this.creatorService.chosenArchetypeIndex = index;
  }
}
