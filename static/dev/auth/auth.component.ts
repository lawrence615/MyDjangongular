import {Component} from "angular2/core";
import {AuthService} from "../services/auth.service";
import {Router} from "angular2/router";
@Component({
    selector: 'app-auth',
    template: `
        <div class="row">
            <div class="col-md-6">
                <form (ngSubmit)="onLogin(loginForm)" #loginForm="ngForm">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" required ngControl="username" #username="ngForm">
                        <div [hidden]="username.valid || username.pristine" class="alert alert-danger">Username is required</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" required ngControl="password" #password="ngForm">
                        <div [hidden]="password.valid || password.pristine" class="alert alert-danger">Password is required</div>
                    </div>
                    <button type="submit" class="btn btn-default" [disabled] ="!loginForm.form.valid">Login</button>
                </form>
            </div>
        </div>
        `,
    providers: [AuthService]
})

export class AuthComponent {

    username:string;
    password:string;


    constructor(private _authService:AuthService, private _router:Router) {
    }

    onLogin(formData) {
        this.username = formData.controls['username'].value;
        this.password = formData.controls['password'].value;

        this._authService.login({username: this.username, password: this.password}).subscribe((result)=> {
            if (result) {
                this._router.navigate(['DashboardComponent']);
            }
        })
    }
}