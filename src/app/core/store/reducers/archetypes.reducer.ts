import { combineReducers, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Archetype } from '@creator/models/archetype.model';
import * as archetypeActions from '@core/store/actions/archetypes.actions';

export const adapter: EntityAdapter<Archetype> = createEntityAdapter<Archetype>(
  {
    sortComparer: false,
  }
);

const isLoadingReducer = createReducer(
  false,
  on(archetypeActions.requestArchetypeDescriptions, () => true),
  on(archetypeActions.receiveArchetypeDescriptions, () => false)
);

const archetypesReducer = createReducer(
  adapter.getInitialState(),
  on(archetypeActions.receiveArchetypeDescriptions, (state, { archetypes }) =>
    adapter.upsertMany(archetypes, state)
  )
);

export const archetypesStateReducer = combineReducers({
  archetypes: archetypesReducer,
  isLoading: isLoadingReducer,
});
