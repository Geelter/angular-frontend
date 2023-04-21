import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';
import { AttributesConfig } from '@creator/models/attributes-config';
import { Attribute } from '@creator/models/attribute';

@Component({
  selector: 'app-creator-attributes',
  templateUrl: './creator-attributes.component.html',
  styleUrls: ['./creator-attributes.component.scss'],
})
export class CreatorAttributesComponent implements OnInit {
  constructor(
    private router: Router,
    public creatorService: CharacterCreatorService
  ) {
    [this.previousStepRoute, this.nextStepRoute] =
      this.creatorService.getRoutesForStep(this.stepNumber);
  }

  private stepNumber = 2;

  private previousStepRoute: string[];

  private nextStepRoute: string[];

  previousStep() {
    this.router.navigate(this.previousStepRoute);
  }

  nextStep() {
    this.router.navigate(this.nextStepRoute);
  }

  ngOnInit() {
    this.attributesConfig = this.creatorService.getAttributesConfig();
    this.characterAttributes = this.creatorService.getAttributes();
  }
}
