import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from "@angular/router";
import { UserLoginService } from "../../user/shared/user.login.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-router-guard',
    template: '<div></div>'
})
export class PagesRouterGuardService implements OnInit, OnDestroy{

    private isLoggedInStream: Subscription;

    constructor (private router: Router, private userLoginService: UserLoginService) {

    }

    ngOnInit(){
        this.isLoggedInStream = this.userLoginService.isLoggedInStream$.subscribe((isLoggedIn: boolean)=>{
            if (!isLoggedIn) {
                this.redirectToLoginPage();
            }
        });
        this.userLoginService.isLogged();
    }

    ngOnDestroy(){
        this.isLoggedInStream.unsubscribe();
    }

    private redirectToLoginPage () {
        this.router.navigateByUrl("/login");
    }

}