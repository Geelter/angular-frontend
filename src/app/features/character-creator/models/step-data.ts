import { Archetype } from '@creator/models/archetype.model';
import { Attribute } from '@creator/models/attribute.model';

export interface StepData {
  archetypes: Archetype[];
  attributeConfig: {
    maximumValue: number;
    minimumValue: number;
    sumValue: number;
    initialValue: number;
  };
  attributes: {
    passive: Attribute[];
    active: Attribute[];
  };
}
