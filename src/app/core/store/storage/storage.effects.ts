// tslint:disable:typedef
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMapTo, tap} from 'rxjs/operators';
import {StorageService} from './services/storage.service';
import * as StorageActions from './storage.actions';

@Injectable({ providedIn: 'root' })
export class StorageEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly storageService: StorageService
    ) { }

    public getStorageEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StorageActions.getStorage),
            switchMapTo([StorageActions.getStorageSuccess({ storage: this.storageService.getStorage() })])
        ),
    );

    public saveStorageEffect$ = createEffect(() => this.actions$.pipe(
        ofType(StorageActions.saveStorage),
        tap((action) => {
            this.storageService.saveStorage(action.storage);
        })
        ), {dispatch: false}
    );

}
