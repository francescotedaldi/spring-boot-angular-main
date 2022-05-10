import {createSelector} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {Storage} from './model/storage.model';
import {StorageState} from './storage.reducer';

const root = (state: AppState): StorageState => state.storage;

export const getStorage = createSelector(
  root,
  (state: StorageState): Storage => state.storage
);
