import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { AppSettings } from '../services/app.settings';
import {AuthenticationService} from "./authentication.service";


@Injectable()
export class ChartService {
  constructor(private _http: Http, private authservice: AuthenticationService) { }

  getBarChartData() {
    return this._http.get(AppSettings.API_URL + '/chart/bar')
      .map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }

  getLineChartData() {
    return this._http.get(AppSettings.API_URL + '/chart/line')
      .map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }

  getPieChartData() {
    return this._http.get(AppSettings.API_URL + '/chart/pie')
      .map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }

  getDoughnutChartData() {
    return this._http.get(AppSettings.API_URL + '/chart/doughnut')
      .map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }

  getLeaderBoard() {
    let headers = new Headers( { 'Authorization': this.authservice.token  });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(AppSettings.API_URL + '/friends/scoreBoard', options)
      .map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Status code ${error.status} on url ${error.url}`;
    console.log(msg);
    return Observable.throw(msg);
  }
}
