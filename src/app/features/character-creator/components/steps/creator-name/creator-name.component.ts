import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';

@Component({
  selector: 'app-creator-name',
  templateUrl: './creator-name.component.html',
  styleUrls: ['./creator-name.component.scss'],
})
export class CreatorNameComponent implements OnInit {
  constructor(
    private router: Router,
    private creatorService: CharacterCreatorService
  ) {
    [this.previousStepRoute, this.exitRoute] =
      this.creatorService.getRoutesForStep(this.stepNumber);
  }

  private stepNumber = 3;

  private previousStepRoute: string[];

  private exitRoute: string[];

  characterName: string;

  previousStep() {
    this.router.navigate(this.previousStepRoute);
  }

  async submitCharacter() {
    const result = await this.creatorService.submitCharacter();

    if (result) {
      this.router.navigate(this.exitRoute);
    } else {
      console.log('');
    }
  }

  saveNameToService(name: string) {
    this.creatorService.characterName = name;
  }

  ngOnInit() {
    this.characterName = this.creatorService.characterName;
  }
}
