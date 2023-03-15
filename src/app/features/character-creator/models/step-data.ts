import { Archetype } from '@creator/models/archetype';
import { Attribute } from '@creator/models/attribute';

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
