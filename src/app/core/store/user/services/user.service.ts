import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {AppState} from '../../../../app-state';
import {AckJSON} from '../../../model/ack.model';
import {StorageService} from '../../storage/services/storage.service';
import {Login} from '../model/login.model';
import {User, UserJSON} from '../model/user.model';

@Injectable({providedIn: 'root'})
export class UserService {
  private readonly userBaseURL: string = `${environment.apiUrl}`;

  constructor(
    private readonly http: HttpClient,
    private readonly store: Store<AppState>,
    private readonly storageService: StorageService,
  ) {
  }

  public login(login: Login): Observable<UserJSON> {
    return this.http.post<UserJSON>(`${this.userBaseURL}/user/login`, Login.toJSON(login));
  }

  public save(user: User): Observable<UserJSON> {
    return this.http.post<UserJSON>(`${this.userBaseURL}/user`, User.toJSON(user));
  }

  public getUser(): User {
    return this.storageService.getStorage().user;
  }

  public storeUser(user: User): void {
    const storage = this.storageService.getStorage();
    storage.user = user;
    this.storageService.saveStorage(storage);
  }

  public logout(): Observable<AckJSON> {
    return this.http.post<AckJSON>(`${this.userBaseURL}/user/logout`, null);
  }

}
