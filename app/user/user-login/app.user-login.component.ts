import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserLogIn } from '../shared/user-login.model';
import { UserLoginService } from "../shared/user.login.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-user-login',
    templateUrl: 'app/user/user-login/app.user-login.component.html',
    styleUrls: ['app/user/user-login/app.uaer-login.component.css']
})
export class UserLoginFormComponent implements OnInit, OnDestroy{

    private user: UserLogIn;
    private failedLogin: boolean;
    private loggedInUser: boolean;
    private failedLoginSubscriber: Subscription;

    constructor(private userLoginService: UserLoginService, private router: Router) {

    }

    ngOnInit(){
        this.setInitData();
        this.failedLoginSubscriber = this.userLoginService.isLoggedInStream$.subscribe((isUserLoggedIn: boolean)=>{
            this.loggedInUser = isUserLoggedIn;
        })

    }
    ngOnDestroy(){
        this.failedLoginSubscriber.unsubscribe();
    }

    private setInitData (): void {

        this.user = {
            name: '',
            password: ''
        }
    }

    private userAutorizationSuccess() {
        //this.router.navigateByUrl("/");
        //this.loggedInUser = true;

    }

    private userAutorizationError(){
        this.failedLogin = true;
    }

    private userLogout() {
        //this.router.navigateByUrl("/");
    }

    onSubmit(): void {
        this.userLoginService.logIn(this.user).then((resp) => {
            return resp ? this.userAutorizationSuccess() : this.userAutorizationError();
        })
    }

    onLogout():void {
        this.userLoginService.logOut().then(()=>{
            this.userLogout();
        })
    }

}