import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterCreatorService } from '@creator/character-creator.service';
import { AttributesConfigModel } from '@creator/models/attributes-config.model';
import { AttributeModel } from '@creator/models/attribute.model';

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

  attributesConfig: Promise<AttributesConfigModel>;

  characterAttributes: Promise<AttributeModel[]>;

  chosenAttribute: AttributeModel | null = null;

  sumAttributes(attributes: AttributeModel[]): number {
    let attributesSum = 0;
    attributes.forEach(attribute => (attributesSum -= attribute.value));
    console.log(attributesSum);
    return attributesSum;
  }

  attributesSumIsCorrect(
    attributes: AttributeModel[],
    config: AttributesConfigModel
  ): boolean {
    return this.sumAttributes(attributes) == config.attribute_points;
  }

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
