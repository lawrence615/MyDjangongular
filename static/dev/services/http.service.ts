import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx.js';
import {Headers} from "angular2/http";
import {URLSearchParams} from "angular2/http";

@Injectable()

export class HttpService {
    constructor(private _http:Http) {
    }

    getFacilities():Observable<any> {
        return this._http.get('http://localhost:8000/api/facilities')
            .map(res => res.json());
    }

    createFacility(post:{name: string, location: string}):Observable<any> {
        const body = JSON.stringify(post);
        //console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:8000/api/facilities/', body, {
            headers: headers
        }).map(res=>res.json());
    }

    getFacility(id:number):Observable<any> {
        return this._http.get('http://localhost:8000/api/facilities/' + id)
            .map(res => res.json());
    }

    deleteFacility(id:number):Observable<any> {
        return this._http.delete('http://localhost:8000/api/facilities/' + id, {
                //search: params
            })
            .map(res => res.json());
    }
}