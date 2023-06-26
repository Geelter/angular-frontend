import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArchetypesState } from '@core/store/state/archetypes.state';
import { adapter } from '@core/store/reducers/archetypes.reducer';

const featureKey = 'archetypes';

const selectArchetypesState =
  createFeatureSelector<ArchetypesState>(featureKey);

export const selectArchetypesIsLoading = createSelector(
  selectArchetypesState,
  (archetypesState: ArchetypesState) => archetypesState.isLoading
);

const selectArchetypes = createSelector(
  selectArchetypesState,
  (archetypesState: ArchetypesState) => archetypesState.archetypes
);

export const {
  selectIds: selectArchetypeEntityIDs,
  selectEntities: selectArchetypeEntities,
  selectAll: selectAllArchetypes,
  selectTotal: selectTotalArchetypes,
} = adapter.getSelectors(selectArchetypes);

export const selectArchetypeForID = (props: { archetypeID: number }) =>
  createSelector(selectAllArchetypes, archetypes => {
    return archetypes.find(archetype => archetype.id === props.archetypeID);
  });
