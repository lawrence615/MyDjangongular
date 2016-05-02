import {Component} from "angular2/core";
import {HttpService} from "../services/http.service";
import {Router} from "angular2/router";
@Component({
    selector: 'app-new-facility',
    template: `
            <div class="row">
                <div class="col-md-6">
                    <form (ngSubmit)="onSubmit(newFacilityForm)" #newFacilityForm="ngForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" required ngControl="name" #name="ngForm">
                            <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
                                Name is required
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="location">Location</label>
                            <input type="text" class="form-control" required ngControl="location" #location="ngForm">
                        </div>

                        <a class="btn btn-danger" (click)="onCancel()"><span class="fa fa-close"></span> Cancel</a>
                        <button type="submit" class="btn btn-default" [disabled] ="!newFacilityForm.form.valid">Create</button>
                    </form>
                </div>
            </div>
    `,
    providers: [HttpService]
})

export class NewFacilityComponent {

    constructor(private _httpService:HttpService, private _router:Router) {
    }

    facility = {'name': '', 'location': ''};

    facility_name:string;
    facility_loc:string;

    onSubmit(formData) {
        this.facility_name = formData.controls['name'].value;
        this.facility_loc = formData.controls['location'].value;

        this._httpService.createFacility({name: this.facility_name, location: this.facility_loc}).subscribe(
            error => console.log(error)
        );

        this._router.navigate(['FacilitiesList']);
    }

    onCancel(){
        this._router.navigate(['FacilitiesList']);
    }
}