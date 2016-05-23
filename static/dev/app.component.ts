import {Component} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {FacilitiesComponent} from "./facilities/facilities.component";
import {DashboardMain} from "./dashboard/dashboard-main.component";
import {AuthComponent} from "./auth/auth.component";
import {LandingComponent} from "./landing/landing.component";
import {LoggedInRouterOutlet} from "./directives/loggedin.routeroutlet.directive";
import {AuthService} from "./services/auth.service";
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
                      <a class="navbar-brand" [routerLink]="['LandingComponent']">MyDjangoNgular</a>
                    </div>
                    <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li [class.active]="isActive(['DashboardComponent'])"><a [routerLink]="['DashboardComponent']">Home</a></li>
                            <li [class.active]="isActive(['FacilitiesComponent'])"><a [routerLink]="['FacilitiesComponent']">Facilities</a></li>
                            <!--<li [class.active]="isActive(['NewFacilityComponent'])"><a [routerLink]="['NewFacilityComponent']">About</a></li>-->
                            <li><a [routerLink]="['AuthComponent']">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <router-outlet-cust></router-outlet-cust>
        </div>
    `,
    directives: [LandingComponent, FacilitiesComponent, DashboardMain, AuthComponent, LoggedInRouterOutlet, ROUTER_DIRECTIVES],
    providers:[AuthService]
})

@RouteConfig([
    {path: '/', name: 'LandingComponent', component: LandingComponent, useAsDefault: true},
    {path: '/dashboard', name: 'DashboardComponent', component: DashboardMain},
    {path: '/facilities/...', name: 'FacilitiesComponent', component: FacilitiesComponent},
    {path: '/login', name: 'AuthComponent', component: AuthComponent}

])

export class AppComponent {

    constructor(private _router:Router) {
    }

    isActive(route:any[]):boolean {
        return this._router.isRouteActive(this._router.generate(route));
    }

}