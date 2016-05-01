import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {HttpService} from "../services/http.service";
import {Router} from "angular2/router";
@Component({
    template: `
            <div class="row">
                <div class="col-md-12">
                    <div *ngIf="facilities_err" class="alert alert-danger">An error occurred while loading facilities</div>
                    <div class="panel panel-default">
                        <div class="panel-heading">Facilities
                            <a (click)="onAddFacility()" class="btn btn-link pull-right"><span class="fa fa-play-circle-o"></span> Add Facility</a>
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
                                <tr *ngFor="#facility of response">
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
    `
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
            response => this.response = response,
            error => this.facilities_err = true
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
            error => console.log(error)
        );
    }
}