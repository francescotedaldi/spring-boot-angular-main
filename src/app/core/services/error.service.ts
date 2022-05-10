import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';
import {AppState} from '../../app-state';
import {ErrorType} from '../enums/error-type.enum';
import {Error} from '../model/error.model';
import * as RouterActions from '../store/router/router.actions';

@Injectable({ providedIn: 'root' })
export class ErrorService {

  constructor(
      private readonly toast: ToastrService,
      private readonly store: Store<AppState>,
      private readonly translateService: TranslateService
  ) { }

  public processHttpError(response: HttpErrorResponse): void {

      if (response.error) {
          const error = new Error(response.error);
          switch (error.type) {
              case ErrorType.VALIDATION:
                  this.toast.warning(error.message);
                  break;
              case ErrorType.SERVICE:
                  this.toast.error(error.message);
                  break;
              case ErrorType.NOT_IMPLEMENTED:
                  this.toast.warning(error.message);
                  break;
              case ErrorType.UNEXPECTED:
                  this.toast.error(error.message);
                  break;
          }
      } else {
          switch (response.status) {
              case 401: {
                  this.toast.error(this.translateService.instant('errors.invalid_credentials'));
                  break;
              }
              default: {
                  const errorMessage = (response.error && (response.error.message || response.error.description)) || response.message;
                  this.toast.error(errorMessage);

                  if (response.status === 404) {
                      this.store.dispatch(RouterActions.goToHome());
                  }
              }
          }
      }
  }
}
