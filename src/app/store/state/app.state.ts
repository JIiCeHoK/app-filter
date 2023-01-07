import { IappState } from '../../types/interfaces';
import { intialConfigState } from './config.state';
import { intialShipState } from './ship.state';

export const intialAppState: IappState = {
    ships: intialShipState,
    config: intialConfigState,
}
