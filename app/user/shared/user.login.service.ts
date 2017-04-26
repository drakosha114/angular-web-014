import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { UserLogIn } from './user-login.model';
import { User } from './user.model';
import { UsersBackend } from "./users.backend";

@Injectable()
export class UserLoginService {

    private isLoggedIn = new Subject<boolean>();
    public isLoggedInStream$ = this.isLoggedIn.asObservable();
    private loggedInUser = new Subject<User>();
    public loggedInUserStream$ = this.loggedInUser.asObservable();

    constructor(private usersBackend: UsersBackend) {
        this.isLogged();
    }

    logIn(user: UserLogIn): Promise<boolean> {

        return new Promise((resolve)=>{
            this.usersBackend.loginUser(user).subscribe( (resp) => {

                if (resp) {
                    this.isLoggedIn.next(true);
                    this.loggedInUser.next(resp);
                    resolve(true);
                } else {
                    this.isLoggedIn.next(false);
                    this.loggedInUser.next(null);
                    resolve(false);
                }
            });
        })

    }

    logOut(): Promise<boolean> {
        return new Promise((resolve)=>{
            this.usersBackend.logoutUser().subscribe(()=>{
                this.isLoggedIn.next(false);
                this.loggedInUser.next(null);
                resolve(false);
            })
        });

    }


    public isLogged(): Promise <boolean> {
        return new Promise((resolve) => {
            this.usersBackend.isLogged().subscribe((resp)=> {
                if(resp) {
                    this.isLoggedIn.next(true);
                    resolve(true);
                } else {
                    this.isLoggedIn.next(false);
                    resolve(false);
                }

            })
        })
    }
}