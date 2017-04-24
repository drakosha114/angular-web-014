import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class UsersBackend {

    private usersUrl: string = 'http://localhost:8080/users';
    private checkUniqueUserUrl: string = "http://localhost:8080/users/checkUserUnique";

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
}