import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Headers} from "angular2/http";

@Injectable()
export class AuthService {

    private loggedIn = false;

    constructor(private _http:Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }


    login(credentials:{username: string, password: string}) {
        const body = JSON.stringify(credentials);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post('http://localhost:8000/api-token-auth/', body, {
            headers: headers
        }).map(res => res.json())
            .map((res) => {
                if (res) {
                    localStorage.setItem('auth_token', res.token);
                    this.loggedIn = true;
                }

                return true;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}