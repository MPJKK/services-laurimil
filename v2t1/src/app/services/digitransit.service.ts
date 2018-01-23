import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DigitransitService {

  testi: string = "Digitrans";
  // apiUrl = 'https://api.digitransit.fi/graphiql/hsl';
  apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'

  constructor(private http: HttpClient) { }

  getRoutes(){
    const body = {};
    return this.http.post(this.apiUrl, body);
  }

}
