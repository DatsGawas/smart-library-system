/**
 * Created by dattaram on 6/1/19.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class RestCallService {
  constructor(private _httpClient: HttpClient) {
  }

  getRestCall(url: string): Observable<any> {
   return this._httpClient.get(url);
  }

  postRestCall(url: string, requestBody: any): Observable<any> {
    const header = new HttpHeaders().append(
      'Content-Type',
      'application/json;charset=UTF-8'
    )
    return this._httpClient.post(url, requestBody, { header});
  }
}
