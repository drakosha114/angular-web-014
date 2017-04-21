import { Component } from '@angular/core';

import { User } from '../shared/user.model';

@Component({
    selector: 'app-user-registration',
    templateUrl: 'app/user/user-registration/user-registration.component.html',
    styleUrls: ['app/user/user-registration/user-registration.component.css']
})
export class UserRegistrationComponent{
    private user: User;
    constructor () {
        this.user = {
            name: '',
            password: '',
            password2: '',
            email: '',
            dateOfBirth: new Date,
            subscribe: false,
        }
    }

    onSubmit(){

    }
}