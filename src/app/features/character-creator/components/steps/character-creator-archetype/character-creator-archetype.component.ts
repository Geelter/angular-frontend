import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { archetypes } from '@assets/dummy-data/archetypes';

@Component({
  selector: 'app-character-creator-archetype',
  templateUrl: './character-creator-archetype.component.html',
  styleUrls: ['./character-creator-archetype.component.scss'],
})
export class CharacterCreatorArchetypeComponent implements OnInit {
  constructor(private router: Router) {}
  archetypes: { name: string; description: string }[];
  chosenArchetype = 0;
  nextStep() {
    this.router.navigate(['/creator', 'advantages']);
  }

  exitCreator() {
    this.router.navigate(['/']);
  }

  chooseArchetype(index: number) {
    this.chosenArchetype = index;
  }

  ngOnInit() {
    this.archetypes = archetypes;
  }
}
