import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from "@angular/router";
import {UserLoginService} from "./user/shared/user.login.service";
import {Subscription} from "rxjs/Subscription";


@Component({
    selector: 'my-app',
    template: `
        <app-navbar></app-navbar>
        <div class="container">
            <router-outlet></router-outlet>           
        </div>
    `
})
export class AppComponent implements OnInit, OnDestroy{

    private isLoggedInStream: Subscription;

    constructor(private router: Router, private userLoginService: UserLoginService) {
        this.isLoggedInStream = this.userLoginService.isLoggedInStream$.subscribe((isLogged: boolean)=>{
            if(!isLogged) {
                this.redirectToLoginPage();
            }
        })
    }

    ngOnInit(){
        console.log('sadas');
        this.userLoginService.isLogged();
    }

    ngOnDestroy(){
        this.isLoggedInStream.unsubscribe();
    }

    private redirectToLoginPage () {
        this.router.navigateByUrl("/login");
    }

}
