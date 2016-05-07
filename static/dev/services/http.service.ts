import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {Headers} from "angular2/http";
import {URLSearchParams} from "angular2/http";


@Injectable()

export class HttpService {
    constructor(private _http:Http) {
    }

    getFacilities(page:number):Observable<any> {
        let params:URLSearchParams = new URLSearchParams();
        params.set('page', page.toString());
        return this._http.get('http://localhost:8000/api/facilities', {
                search: params
            })
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
        return this._http.delete(`http://localhost:8000/api/facilities/${id}/`)
            .map(res => {});
    }
}