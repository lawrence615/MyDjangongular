import { ElementRef, DynamicComponentLoader, AttributeMetadata, Directive, Attribute } from 'angular2/core';
import { Router, RouterOutlet, ComponentInstruction } from 'angular2/router';
import {AuthService} from "../services/auth.service";

@Directive({
    selector: 'router-outlet-cust'
})
export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes:Array<any>;
    private parentRouter:Router;
    private authService:AuthService;

    constructor(_elementRef:ElementRef, _loader:DynamicComponentLoader,
                _parentRouter:Router, @Attribute('name') nameAttr:string,
                private _authService:AuthService) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        this.publicRoutes = [
            '', 'login', 'signup'
        ];
        this.authService = _authService;
    }

    activate(instruction:ComponentInstruction) {
        if (this._canActivate(instruction.urlPath)) {
            return super.activate(instruction);
        }

        this.parentRouter.navigate(['AuthComponent']);
    }

    _canActivate(url) {
        return this.publicRoutes.indexOf(url) !== -1
            || this.authService.isLoggedIn();
    }
}