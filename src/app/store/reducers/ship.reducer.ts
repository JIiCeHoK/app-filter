import { createReducer, on } from '@ngrx/store';
import { getShipsSuccess, setShipSuccess, setShipId } from '../actions/ship.actions';
import { intialAppState } from '../state/app.state';

export const shipReducer = createReducer(intialAppState,
    on(getShipsSuccess, (state, { ships }) => ({
        ...state, ships: {
            ships: ships,
            selectedShip: state.ships.selectedShip
        }
    })),
    on(setShipSuccess, (state, { ship }) => ({ ...state, selectedShip: ship })),
    on(setShipId, (state, { id }) => ({
        ...state, selectedShip: {
            id: id,
            type: '',
            name: '',
            home_port: ''
        }
    }))
)
