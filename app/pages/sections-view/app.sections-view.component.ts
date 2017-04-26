import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserLoginService } from "../../user/shared/user.login.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'pages-sections',
    templateUrl: 'app/pages/sections-view/app.sections-view.component.html',
    styleUrls: ['app/pages/sections-view/app.sections-view.component.css']
})
export class SectionsViewComponent implements OnInit, OnDestroy{
    private isLoggedInStream: Subscription;
    constructor( private userLoginService: UserLoginService, private router: Router ){
        this.isLoggedInStream = this.userLoginService.isLoggedInStream$.subscribe((isLogged: boolean)=>{
            if(!isLogged) {
                this.redirectToLoginPage();
            }
        });
    }

    ngOnInit(){
        this.userLoginService.isLogged();
    }

    ngOnDestroy(){
        this.isLoggedInStream.unsubscribe();
    }

    private redirectToLoginPage () {
        this.router.navigateByUrl("/login");
    }
}