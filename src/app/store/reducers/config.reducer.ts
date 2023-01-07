import { createReducer, on } from '@ngrx/store';
import { intialAppState } from '../state/app.state';

export const configReducer = createReducer(intialAppState)