import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { AuthenticationService } from './authentication.service';
import { AppSettings } from '../services/app.settings';
import {Category} from "../../models/category.model";


@Injectable()
export class CategoryService {
    constructor(private _http: Http, private authService: AuthenticationService) { }

    list() {
        let headers = new Headers( { 'Authorization': this.authService.token  });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(AppSettings.API_URL + '/categories', options)
            .map((response: Response) => <Category[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status code ${error.status} on url ${error.url}`;
        console.log(msg);
        return Observable.throw(msg);
    }
}
