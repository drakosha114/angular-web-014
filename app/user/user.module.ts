import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserService }  from './shared/user.service';
import { UsersBackend } from "./shared/users.backend";
import { EqualToValidatorDirective } from "./directives/user.equalToValidator.directive";
import { CheckUniqueUserNameDirective } from "./directives/user.checkUniqueName-validator.directive";
import { UserLoginFormComponent } from "./user-login/app.user-login.component";
import { UserLoginService } from "./shared/user.login.service";

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
        UserLoginFormComponent
    ],
    exports: [
        UserRegistrationComponent,
        EqualToValidatorDirective,
        CheckUniqueUserNameDirective,
        UserLoginFormComponent
    ],
    providers: [
        UserService,
        UsersBackend,
        UserLoginService
    ]
})
export class UserModule{

}