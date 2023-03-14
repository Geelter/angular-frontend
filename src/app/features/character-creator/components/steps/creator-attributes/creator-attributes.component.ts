import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';

@Component({
  selector: 'app-creator-attributes',
  templateUrl: './creator-attributes.component.html',
  styleUrls: ['./creator-attributes.component.scss'],
})
export class CreatorAttributesComponent {
  constructor(
    private router: Router,
    private creatorService: CharacterCreatorService
  ) {
    [this.previousStepRoute, this.nextStepRoute] =
      this.creatorService.getRoutesForStep(this.stepNumber);
  }

  private stepNumber = 2;

  private previousStepRoute: string[];

  private nextStepRoute: string[];

  previousStep() {
    this.router.navigate(this.previousStepRoute);
  }

  nextStep() {
    this.router.navigate(this.nextStepRoute);
  }
}
