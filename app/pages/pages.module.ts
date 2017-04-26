import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotesModule } from "../notes/notes.module";
import { SectionsModule } from "../sections/sections.module";
import { UserModule } from '../user/user.module';

import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from "./login-view/app.ligin-view.component";
import { SectionsViewComponent } from "./sections-view/app.sections-view.component";
import { EditProfileViewComponent } from "./editProfile-view/app.editProfile-view.component";
import {PagesRouterGuardService} from "./shared/pages.router-guard.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UserModule,
        NotesModule,
        SectionsModule
    ],
    declarations: [
        RegisterViewComponent,
        LoginViewComponent,
        SectionsViewComponent,
        EditProfileViewComponent,
        PagesRouterGuardService

    ],
    exports: [
        RegisterViewComponent,
        LoginViewComponent,
        SectionsViewComponent,
        EditProfileViewComponent,
        PagesRouterGuardService
    ],
    providers: [

    ]
})
export class PagesModule{}