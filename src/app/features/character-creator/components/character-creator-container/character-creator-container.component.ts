import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

const tempSteps = [
  {
    label: 'Archetype',
    routerLink: 'archetype',
  },
  {
    label: 'Name',
    routerLink: 'name',
  },
];

@Component({
  selector: 'app-character-creator-container',
  templateUrl: './character-creator-container.component.html',
  styleUrls: ['./character-creator-container.component.scss'],
})
export class CharacterCreatorContainerComponent implements OnInit {
  steps: MenuItem[];

  ngOnInit() {
    this.steps = tempSteps;
  }
}
