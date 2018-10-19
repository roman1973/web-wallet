import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

@Injectable()
export class ValuteRateService {
  constructor(private http: Http) {}
  getCurrencyName(API_KEY: string = '3746cb78966a7d32f36b7baeff3bd16c'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/symbols?access_key=${API_KEY}`)
      .map((response: Response ) => response.json())
      .map((data: any) => data.symbols);

  }
  getCurrency(API_KEY: string = '3746cb78966a7d32f36b7baeff3bd16c'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${API_KEY}`)
      .map((response: Response ) => response.json())
      .map((data: any) => [data.rates, data.base]);

  }
}
