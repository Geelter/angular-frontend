import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as archetypesActions from '@core/store/actions/archetypes.actions';
import * as globalActions from '@core/store/actions/global.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ArchetypesService } from '@core/services/archetypes.service';

export const requestArchetypeDescriptions = createEffect(
  (
    actions$ = inject(Actions),
    archetypesService = inject(ArchetypesService)
  ) => {
    return actions$.pipe(
      ofType(archetypesActions.requestArchetypeDescriptions),
      switchMap(action =>
        from(archetypesService.fetchArchetypeDescriptions()).pipe(
          map(archetypes =>
            archetypesActions.receiveArchetypeDescriptions({
              archetypes: archetypes,
            })
          ),
          catchError(err =>
            of(globalActions.actionError({ error: err, action: action }))
          )
        )
      )
    );
  },
  { functional: true }
);
