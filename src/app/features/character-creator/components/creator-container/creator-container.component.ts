import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CharacterCreatorService } from '@creator/character-creator.service';

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
  constructor(private creatorService: CharacterCreatorService) {}
  steps: MenuItem[];

  private characterArchetypesFetched = false;

  private attributesConfigFetched = false;

  private characterAttributesFetched = false;

  get creatorDataFetchComplete() {
    return (
      this.characterArchetypesFetched &&
      this.attributesConfigFetched &&
      this.characterAttributesFetched
    );
  }

  ngOnInit() {
    this.steps = tempSteps;

    this.creatorService.getCharacterArchetypes().finally(() => {
      this.characterArchetypesFetched = true;
    });
    this.creatorService.getAttributesConfig().finally(() => {
      this.attributesConfigFetched = true;
    });
    this.creatorService.getAttributes().finally(() => {
      this.characterAttributesFetched = true;
    });
  }
}
