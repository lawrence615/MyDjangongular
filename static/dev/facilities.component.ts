import {Component} from "angular2/core";
import {HttpService} from "./services/http.service";
import {OnInit} from "angular2/core";
import {error} from "util";
@Component({
    selector: 'app-facilities',
    template: `
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Facilities
                        <a class="btn btn-link pull-right"><i class="glyphicon glyphicon-plus-sign"></i> Add Facility</a>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    providers: [HttpService]
})

export class FacilitiesComponent implements OnInit {
    response:string;

    constructor(private _httpService:HttpService) {
    }


    ngOnInit():any {
        this.onGetFacilities();
    }

    onGetFacilities() {
        this._httpService.getFacilities().subscribe(
            response => this.response = response,
            error => console.log(error)
        );
    }
}