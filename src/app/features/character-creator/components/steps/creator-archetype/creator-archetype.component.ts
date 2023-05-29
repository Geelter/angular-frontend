import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';
import { ArchetypeModel } from '@creator/models/archetype.model';

@Component({
  selector: 'app-creator-archetype',
  templateUrl: './creator-archetype.component.html',
  styleUrls: ['./creator-archetype.component.scss'],
})
export class CreatorArchetypeComponent implements OnInit {
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

  characterArchetypesArray: Promise<ArchetypeModel[]>;

  chosenArchetype: ArchetypeModel | null = null;

  nextStep() {
    this.router.navigate(this.nextStepRoute);
  }

  exitCreator() {
    this.router.navigate(this.exitRoute);
  }

  chooseArchetype(archetype: ArchetypeModel) {
    this.creatorService.chosenArchetypeID = archetype.id;
    this.chosenArchetype = archetype;
  }

  ngOnInit() {
    this.characterArchetypesArray = this.creatorService
      .getCharacterArchetypes()
      .then(archetypes => {
        return archetypes.values();
      });
    this.chosenArchetype = this.creatorService.chosenArchetype;
  }
}
