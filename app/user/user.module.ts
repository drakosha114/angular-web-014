import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserService }  from './shared/user.service';
import { UsersBackend } from "./shared/users.backend";
import { EqualToValidatorDirective } from "./directives/user.equalToValidator.directive";
import {CheckUniqueUserNameDirective} from "./directives/user.checkUniqueName-validator.directive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        UserRegistrationComponent,
        EqualToValidatorDirective,
        CheckUniqueUserNameDirective,
    ],
    exports: [
        UserRegistrationComponent,
        EqualToValidatorDirective,
        CheckUniqueUserNameDirective
    ],
    providers: [
        UserService,
        UsersBackend
    ]
})
export class UserModule{

}