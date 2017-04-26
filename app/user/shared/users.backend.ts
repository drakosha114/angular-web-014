import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from './user.model';
import { UserLogIn } from './user-login.model';

@Injectable()
export class UsersBackend {

    private usersUrl: string = 'http://localhost:8080/users';
    private checkUniqueUserUrl: string = "http://localhost:8080/users/checkUserUnique";
    private loginUserUrl: string = 'http://localhost:8080/login';
    private logoutUserUrl: string = 'http://localhost:8080/logout';
    private isUserLoggedUrl: string = 'http://localhost:8080/login/isLogged';

    constructor (private http: Http) {

    }


    public addUser(user:User):Observable<any> {
        return this.http.post(this.usersUrl, user);
    }

    public getUser(id:string):Observable<User> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);

        return this.http.get(this.usersUrl, {search: params}).map(response => response.json() as User);

    }

    public deleteUser(id:string):Observable<any> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);

        return this.http.delete(this.usersUrl, {search: params});

    }

    public checkUniqueUser (name: string):Observable<boolean> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('name', name);

        return this.http.get(this.checkUniqueUserUrl, {search: params}).map(responce => responce.json() as boolean);
    }

    public loginUser(user: UserLogIn):Observable<User> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('name', user.name);
        params.set('password', user.password);

        return this.http.post(this.loginUserUrl, user).map((responce) => {
            try {
                return responce.json() as User;
            } catch(err) {
                return null;
            }
        });
    }

    public logoutUser():Observable<any> {

        return this.http.post(this.logoutUserUrl, {});
    }

    public isLogged():Observable<boolean> {
        return this.http.post(this.isUserLoggedUrl, {}).map((responce) => {
            return responce.json();
        });
    }
}