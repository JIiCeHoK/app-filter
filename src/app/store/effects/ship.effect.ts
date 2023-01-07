import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError} from 'rxjs/operators';
import { ApiService } from '../../api.service';

@Injectable()
export class ShipEffects {

    loadShip$ = createEffect(() => this.actions$.pipe(
        ofType('[Ship] Get Ship'),
        mergeMap(() => this.apiService.getShip('')
            .pipe(
                map(shipData => ({ type: '[Ship] Get Ship Success', ship: shipData })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
    ) { }
}