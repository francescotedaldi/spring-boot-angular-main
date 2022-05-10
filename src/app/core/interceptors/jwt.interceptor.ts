import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, switchMap, take} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AppState} from '../../app-state';
import * as UserSelectors from '../../core/store/user/user.selectors';
import {ErrorService} from '../services/error.service';
import {User} from '../store/user/model/user.model';
import {ANY} from '../utils/any';

@Injectable({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private readonly store: Store<AppState>,
        private readonly errorService: ErrorService
    ) { }

    public intercept(req: HttpRequest<ANY>, next: HttpHandler): Observable<HttpEvent<ANY>> {
        return this.store.select(UserSelectors.getUser).pipe(
            // Interceptor requires observable that complete
            // BETTER than first: avoid errors if there is no value
            take(1),
            switchMap((user: User) => {
                const isInternalUrl = req.url.startsWith(environment.apiUrl);
                const authReq = isInternalUrl && !!user ? req.clone({
                    setHeaders: { Authorization: `Bearer ${user.token}` },
                }) : req;
                return next.handle(authReq)
                    .pipe(
                        catchError((err: ANY) => {
                            if (err instanceof HttpErrorResponse) {
                                this.errorService.processHttpError(err);
                            }

                            return of(err);
                            // return throwError(err);
                        }),
                    );
            }),
        );
    }
}
