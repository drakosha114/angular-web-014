import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserModule } from '../user/user.module';

import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from "./login-view/app.ligin-view.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UserModule
    ],
    declarations: [
        RegisterViewComponent,
        LoginViewComponent
    ],
    exports: [
        RegisterViewComponent,
        LoginViewComponent
    ],
    providers: []
})
export class PagesModule{}