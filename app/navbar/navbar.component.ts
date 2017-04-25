import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLoginService } from "../user/shared/user.login.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-navbar',
    templateUrl: 'app/navbar/navbar.component.html',
    styleUrls: ['app/navbar/navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

    private isLoggedIn: boolean;
    private isLoggedInStream: Subscription;

    constructor(private userLoginService: UserLoginService){

    }

    ngOnInit(){
        this.isLoggedInStream = this.userLoginService.isLoggedInStream$.subscribe((isLoggedIn)=>{
            this.isLoggedIn = isLoggedIn;
        });
    }
    ngOnDestroy(){
        this.isLoggedInStream.unsubscribe();
    }

    logOut(){
        this.userLoginService.logOut();
    }
}