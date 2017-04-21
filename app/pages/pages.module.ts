import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserModule } from '../user/user.module';

import { RegisterViewComponent } from './register-view/register-view.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UserModule
    ],
    declarations: [
        RegisterViewComponent
    ],
    exports: [
        RegisterViewComponent
    ],
    providers: []
})
export class PagesModule{}