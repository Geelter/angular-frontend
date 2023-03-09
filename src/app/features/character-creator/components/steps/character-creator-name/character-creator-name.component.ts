import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';

@Component({
  selector: 'app-character-creator-name',
  templateUrl: './character-creator-name.component.html',
  styleUrls: ['./character-creator-name.component.scss'],
})
export class CharacterCreatorNameComponent implements OnInit {
  constructor(
    private router: Router,
    private creatorService: CharacterCreatorService
  ) {}
  characterName: string;

  previousStep() {
    this.router.navigate(['/creator', 'archetype']);
  }

  submitCharacter() {
    this.creatorService.submitCharacter();
  }

  saveNameToService(name: string) {
    this.creatorService.characterName = name;
  }

  ngOnInit() {
    this.characterName = this.creatorService.characterName;
  }
}
