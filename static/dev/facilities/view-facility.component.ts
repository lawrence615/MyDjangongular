import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {OnInit} from "angular2/core";
import {HttpService} from "../services/http.service";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
@Component({
    selector: 'app-view-facility',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3 class="panel-title">Facility details</h3>
            </div>
            <div class="panel-body">
                <p>Facility Name: {{ facility_name }}</p>
                <p>Facility Location: {{ facility_loc }}</p>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class ViewFacilityComponent implements OnInit {
    facility_name:string;
    facility_loc:string;

    constructor(private _httpService:HttpService, private _router:Router, private _routeParams:RouteParams) {
    }

    ngOnInit():any {
        let id = +this._routeParams.get('id');
        this.fetchFacility(id);
    }

    fetchFacility(id:number) {
        this._httpService.getFacility(id).subscribe(
            response => {
                this.facility_name = response.name,
                    this.facility_loc = response.location
            },
            error => console.log(error)
        )
    }
}