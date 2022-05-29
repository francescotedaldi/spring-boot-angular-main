import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {Test, TestJSON} from '../model/test.model';

@Injectable({ providedIn: 'root' })
export class TestService {
  public readonly testBaseURL: string = `${environment.apiUrl}`;

  constructor(
      private readonly http: HttpClient
  ) { }

  public getAll(): Observable<TestJSON[]> {
    return this.http.get<TestJSON[]>(`${this.testBaseURL}/tests`);
  }

  public get(id: number): Observable<TestJSON> {
    return this.http.get<TestJSON>(`${this.testBaseURL}/tests/${id}`);
  }

  public save(test: Test): Observable<TestJSON> {
    return this.http.post<TestJSON>(`${this.testBaseURL}/tests`, Test.toJSON(test));
  }

  public update(test: Test): Observable<TestJSON> {
    return this.http.put<TestJSON>(`${this.testBaseURL}/tests`, Test.toJSON(test));
  }

  public delete(id: number): Observable<TestJSON> {
    return this.http.delete<TestJSON>(`${this.testBaseURL}/tests/${id}`);
  }
}
