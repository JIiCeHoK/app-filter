import { createSelector } from '@ngrx/store';
import { IappState, IconfigState } from '../../types/interfaces';

export const selectConfig = (state: IappState) => state.config

export const selectCurrentPage = createSelector(
    selectConfig,
    (state: IconfigState) => state
)