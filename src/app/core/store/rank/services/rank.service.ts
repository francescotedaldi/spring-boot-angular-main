import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {GameType} from '../../../enums/game-type.enum';
import {AckJSON} from '../../../model/ack.model';
import {RankUpdate} from '../model/rank-update.model';
import {RankJSON} from '../model/rank.model';

@Injectable({providedIn: 'root'})
export class RankService {
  private readonly rankBaseURL: string = `${environment.apiUrl}`;

  constructor(
    private readonly http: HttpClient
  ) { }

  public save(rankUpdate: RankUpdate): Observable<AckJSON> {
    return this.http.post<AckJSON>(`${this.rankBaseURL}/ranks`, RankUpdate.toJSON(rankUpdate));
  }

  public getAll(gameType: GameType): Observable<RankJSON[]> {
    return this.http.get<RankJSON[]>(`${this.rankBaseURL}/ranks/${gameType}`);
  }

}
