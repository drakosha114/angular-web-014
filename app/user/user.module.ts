import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        UserRegistrationComponent
    ],
    exports: [
        UserRegistrationComponent
    ],
    providers: [

    ]
})
export class UserModule{

}