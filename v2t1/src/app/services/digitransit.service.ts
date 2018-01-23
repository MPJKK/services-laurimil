import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DigitransitService {

  testi: string = "Digitrans";
  apiUrl = 'https://api.digitransit.fi/graphiql/hsl';

  constructor(private http: HttpClient) { }

  getRoutes(){

  }

}
