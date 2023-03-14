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
