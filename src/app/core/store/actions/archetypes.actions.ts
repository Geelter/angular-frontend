import { createAction, props } from '@ngrx/store';
import { Archetype } from '@creator/models/archetype.model';

export const requestArchetypeDescriptions = createAction(
  '[Archetypes] Request Archetype Descriptions'
);

export const receiveArchetypeDescriptions = createAction(
  '[Archetypes] Receive Archetype Descriptions',
  props<{ archetypes: Archetype[] }>()
);
