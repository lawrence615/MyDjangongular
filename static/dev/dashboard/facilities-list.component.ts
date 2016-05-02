import {Component} from "angular2/core";
@Component({
    selector: 'dashboard-facilities-list',
    template: `
        <h3>Active facilities</h3>
        <table class="table">
        <thead>
            <th>#</th>
            <th>Facility name</th>
            <th>Location</th>
        </thead>
        <tbody>
        </tbody>
        </table>
    `
})

export class DashboardFacilitiesList{}