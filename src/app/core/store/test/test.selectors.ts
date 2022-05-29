import {createSelector} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {Test} from './model/test.model';
import {TestState} from './test.reducer';

const root = (state: AppState): TestState => state.test;

export const getTests = createSelector(
    root,
    (state: TestState): Test[] => state.tests
);

export const getTest = createSelector(
    root,
    (state: TestState): Test => state.test
);
