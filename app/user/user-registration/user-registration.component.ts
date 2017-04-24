import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/user.model';
import {UserService} from "../shared/user.service";


@Component({
    selector: 'app-user-registration',
    templateUrl: 'app/user/user-registration/user-registration.component.html',
    styleUrls: ['app/user/user-registration/user-registration.component.css'],
    providers: [ UserService ]
})
export class UserRegistrationComponent{

    private user: User;
    private responseStatus: boolean;

    constructor ( private userService: UserService ) {
        this.initUserStartParameters();
        this.responseStatus = false;
    }

    private initUserStartParameters () {
        this.user = {
            name: '',
            password: '',
            password2: '',
            email: '',
            dateOfBirth: '',
            subscribe: false,
        }
    }

    onSubmit() {
        this.userService.addUser(this.user).subscribe(()=>{
            this.initUserStartParameters();
            this.responseStatus = true;
        })
    }

    closeAlert() {
        this.responseStatus = false;
    }

}