import { createAction, props } from '@ngrx/store';
import { Iship } from '../../types/interfaces';

export enum EshipActions {
    GetShips = '[Ship] Get Ships',
    GetShipsSuccess = '[Ship] Get Ships Success',
    GetShip = '[Ship] Get Ship',
    SetShipId = '[Ship] Set Ship id',
    SetShipSuccess = '[Ship] Set Ship Success',
};

export const getShips = createAction(
    EshipActions.GetShips,
);

export const getShipsSuccess = createAction(
    EshipActions.GetShipsSuccess,
    props<{ ships: any[]; }>()
)
export const getShip = createAction(
    EshipActions.GetShip,
)
export const setShipSuccess = createAction(
    EshipActions.SetShipSuccess,
    props<{ ship: Iship; }>()
)

export const setShipId = createAction(
    EshipActions.SetShipId,
    props<{ id: string; }>()
)