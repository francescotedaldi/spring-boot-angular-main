import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './model/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Battleship';
  private logged: boolean;
  data = {}  as any;
  constructor(private http: HttpClient) {
    http.get('resource').subscribe(data => this.data = data);
    this.logged = false;
  }

  public isLogged(login: Login): void {
    // TODO verifica che il login è corretto nel caso setta logged = true
    console.log('app: isLogged: login arrivato');
    if (login.username === 'admin' && login.password === 'admin') {
      this.logged = true;
    }
  }

  public getLogged(): boolean {
    return this.logged;
  }
  public setLogged(logged: boolean): void {
    this.logged = logged;
  }
}
