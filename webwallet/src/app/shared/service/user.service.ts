import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  public baseUrl = 'http://localhost:8080/';

  login2(user, pass) {
    const body = {
      username: user,
      password: pass
    };
    return this.http.post(`${this.baseUrl}login`, body)
      .map((response: Response) => response.json())
      .map((data: any) => data.user);
  }

  registration(user, pass) {
    const body = {
      username: user,
      password: pass
    };
    return this.http.post(`${this.baseUrl}signup`, body)
      .map((response: Response) => response.json());
  }


}
