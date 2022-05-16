import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {BattleshipGameJSON} from '../model/battleship-game.model';
import {BattleshipInstance} from '../model/battleship-instance.model';

@Injectable({providedIn: 'root'})
export class BattleshipGameService {
  private readonly battleshipBaseURL: string = `${environment.apiUrl}/battleship-game`;

  constructor(
    private readonly http: HttpClient
  ) { }

  public get(instance: BattleshipInstance): Observable<BattleshipGameJSON> {
    return this.http.get<BattleshipGameJSON>(`${this.battleshipBaseURL}/${instance.id}`);
  }

}
