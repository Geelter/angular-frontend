import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';

@Component({
  selector: 'app-character-creator-archetype',
  templateUrl: './character-creator-archetype.component.html',
  styleUrls: ['./character-creator-archetype.component.scss'],
})
export class CharacterCreatorArchetypeComponent {
  constructor(
    private router: Router,
    public creatorService: CharacterCreatorService
  ) {}

  nextStep() {
    this.router.navigate(['/creator', 'name']);
  }

  exitCreator() {
    this.router.navigate(['/']);
  }

  chooseArchetype(index: number) {
    this.creatorService.chosenArchetypeIndex = index;
  }
}
