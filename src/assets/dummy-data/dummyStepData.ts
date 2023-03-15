import { StepData } from '@creator/models/step-data';
import { dummyArchetypes } from '@assets/dummy-data/dummyArchetypes';

export const dummyStepData: StepData = {
  archetypes: dummyArchetypes,
  attributeConfig: {
    maximumValue: 2,
    minimumValue: -2,
    sumValue: 0,
    initialValue: 0,
  },
  attributes: {
    passive: [
      {
        name: 'Fortitude',
        id: 1,
        value: 0,
      },
      {
        name: 'Willpower',
        id: 2,
        value: 0,
      },
      {
        name: 'Reflexes',
        id: 3,
        value: 0,
      },
    ],
    active: [
      {
        name: 'Reasoning',
        id: 4,
        value: 0,
      },
      {
        name: 'Perception',
        id: 5,
        value: 0,
      },
      {
        name: 'Intuition',
        id: 6,
        value: 0,
      },
    ],
  },
};
