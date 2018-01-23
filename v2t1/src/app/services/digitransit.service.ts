import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DigitransitService {

  // apiUrl = 'https://api.digitransit.fi/graphiql/hsl';
  apiUrl= 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) { }

  getRoutes(nimi){
    const body = `{
      stops(name:"${nimi}") {
        name
        routes {
          id
          shortName
          longName
        }
      }
    }`;

    const headers = {
      headers: new HttpHeaders().set('Content-Type','application/graphql')
    };

    interface ReittiData {
      data: Object;
    }

    return this.http.post<ReittiData>(this.apiUrl, body, headers);
  }

}
