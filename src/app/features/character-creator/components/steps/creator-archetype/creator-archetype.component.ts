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
