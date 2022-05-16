import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {AckJSON} from '../../../model/ack.model';
import {BattleshipInstance, BattleshipInstanceJSON} from '../model/battleship-instance.model';

@Injectable({providedIn: 'root'})
export class BattleshipInstanceService {
  private readonly battleshipBaseURL: string = `${environment.apiUrl}/settings`;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAll(): Observable<BattleshipInstanceJSON[]> {
    return this.http.get<BattleshipInstanceJSON[]>(`${this.battleshipBaseURL}`);
  }

  public save(instance: BattleshipInstance): Observable<AckJSON> {
    return this.http.post<AckJSON>(`${this.battleshipBaseURL}`, BattleshipInstance.toJSON(instance));
  }

  public delete(id: number): Observable<AckJSON> {
    return this.http.delete<AckJSON>(`${this.battleshipBaseURL}/${id}`);
  }

}
