import { createSelector } from '@ngrx/store';
import { IappState, IshipState } from '../../types/interfaces';

export const shipState = (state: IappState) => state.ships;

export const selectShip = createSelector(
    shipState,
    (state: IshipState) => state.selectedShip
);
