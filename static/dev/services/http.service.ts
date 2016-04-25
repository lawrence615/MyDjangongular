import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx.js';
import {Headers} from "angular2/http";

@Injectable()

export class HttpService {
    constructor(private _http:Http) {
    }

    getFacilities():Observable<any> {
        return this._http.get('http://localhost:8000/api/facilities')
            .map(res => res.json());
    }
}