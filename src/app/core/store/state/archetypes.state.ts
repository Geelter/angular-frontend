import { Archetype } from '@creator/models/archetype.model';
import { EntityState } from '@ngrx/entity';

export interface ArchetypesState {
  archetypes: EntityState<Archetype>;

  isLoading: boolean;
}
