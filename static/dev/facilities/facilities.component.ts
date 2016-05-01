import {Component} from "angular2/core";
import {RouterOutlet} from "angular2/router";
import {FacilitiesListComponent} from "./facilities-list.component";
import {ViewFacilityComponent} from "./view-facility.component";
import {RouteConfig} from "angular2/router";
import {HttpService} from "../services/http.service";
import {NewFacilityComponent} from "./new-facility.component";
@Component({
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet],
    providers: [HttpService]
})

@RouteConfig([
    {path: '/', name: 'FacilitiesList', component: FacilitiesListComponent, useAsDefault: true},
    {path: '/new', name: 'NewFacilityComponent', component: NewFacilityComponent},
    {path: '/view:id', name: 'FacilityView', component: ViewFacilityComponent}
])

export class FacilitiesComponent {
}