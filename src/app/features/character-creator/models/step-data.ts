import { ArchetypeModel } from '@creator/models/archetype.model';
import { AttributeModel } from '@creator/models/attribute.model';

export interface StepData {
  archetypes: ArchetypeModel[];
  attributeConfig: {
    maximumValue: number;
    minimumValue: number;
    sumValue: number;
    initialValue: number;
  };
  attributes: {
    passive: AttributeModel[];
    active: AttributeModel[];
  };
}
