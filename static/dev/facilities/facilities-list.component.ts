import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {HttpService} from "../services/http.service";
import {Router} from "angular2/router";
import {FacilitiesFilterPipe} from "../pipes/facilities-filter.pipe";
@Component({
    template: `
            <div class="row">
                <div class="col-md-12">
                    <div *ngIf="facilities_err" class="alert alert-danger">An error occurred while loading facilities</div>

                    <div class="panel panel-default">
                        <div class="panel-heading">Facilities
                            <a (click)="onAddFacility()" class="btn btn-link pull-right"><span class="fa fa-plus"></span> Add Facility</a>
                        </div>
                        <br>
                        <div class="pull-right">
                            <input class="form-control" type="text" #search_term (keyup)="0" placeholder="Search">
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Facility name</th>
                                    <th>Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="#facility of response | facilitiesFilter:search_term.value">
                                    <td>{{ facility.id}}</td>
                                    <td>{{ facility.name}}</td>
                                    <td>{{ facility.location}}</td>
                                    <td><a (click)="onView(facility.id)" class="btn btn-primary"> View</a>&nbsp;<a class="btn btn-primary"> Edit</a>&nbsp;<a (click)="onDelete(facility.id)" class="btn btn-danger"> Delete</a> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--<router-outlet></router-outlet>-->
                </div>
            </div>
    `,
    pipes:[FacilitiesFilterPipe]
})

export class FacilitiesListComponent implements OnInit {
    response:string;
    facilities_err:boolean = false;

    constructor(private _httpService:HttpService, private _router:Router) {
    }


    ngOnInit():any {
        this.onGetFacilities();
    }

    onGetFacilities() {
        this._httpService.getFacilities().subscribe(
            response => this.response = response.results,
            error => this.facilities_err = true,
            () => console.log("Completed to load all facilities")
        );
    }

    onView(id:number) {
        this._router.navigate(['FacilityView', {id: id}]);
    }

    onAddFacility() {
        this._router.navigate(['NewFacilityComponent']);
    }

    onDelete(id:number) {
        this._httpService.deleteFacility(id).subscribe(
            response => this.response = response,
            error => console.log(error),
            () => console.log("delete complete")
        );
    }
}