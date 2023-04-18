import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

const tempSteps = [
  {
    label: 'Archetype',
    routerLink: 'archetype',
  },
  {
    label: 'Attributes',
    routerLink: 'attributes',
  },
  {
    label: 'Name',
    routerLink: 'name',
  },
];

@Component({
  selector: 'app-creator-container',
  templateUrl: './creator-container.component.html',
  styleUrls: ['./creator-container.component.scss'],
})
export class CreatorContainerComponent implements OnInit {
  steps: MenuItem[];

  ngOnInit() {
    this.steps = tempSteps;
  }
}
