import {Component} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {FacilitiesComponent} from "./facilities/facilities.component";
import {DashboardMain} from "./dashboard/dashboard-main.component";
//import 'rxjs/Rx';
@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">MyDjangoNgular</a>
                    </div>
                    <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li [class.active]="isActive(['DashboardComponent'])"><a [routerLink]="['DashboardComponent']">Home</a></li>
                            <li [class.active]="isActive(['FacilitiesComponent'])"><a [routerLink]="['FacilitiesComponent']">Facilities</a></li>
                            <!--<li [class.active]="isActive(['NewFacilityComponent'])"><a [routerLink]="['NewFacilityComponent']">About</a></li>-->
                        </ul>
                    </div>
                </div>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [FacilitiesComponent, DashboardMain, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'DashboardComponent', component: DashboardMain, useAsDefault: true},
    {path: '/facilities/...', name: 'FacilitiesComponent', component: FacilitiesComponent}

])

export class AppComponent {

    constructor(private _router:Router) {
    }

    isActive(route:any[]):boolean {
        return this._router.isRouteActive(this._router.generate(route));
    }

}