import {Component} from "angular2/core";
import {DashboardStats} from "./stats.component";
import {DashboardFacilitiesList} from "./facilities-list.component";
@Component({
    selector: 'dashboard-main',
    template: `
        <dashboard-stats></dashboard-stats>
        <br>
        <dashboard-facilities-list></dashboard-facilities-list>
    `,
    directives: [DashboardStats, DashboardFacilitiesList]
})

export class DashboardMain {

}