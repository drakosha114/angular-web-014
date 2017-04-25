import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { NotesModule } from './notes/notes.module';
import { SectionsModule } from './sections/sections.module';
import { UserModule } from './user/user.module';
import { PagesModule } from './pages/pages.module';
import { NavbarModule } from './navbar/navbar.module';

import { AppComponent }   from './app.component';

import { RegisterViewComponent } from './pages/register-view/register-view.component';
import { LoginViewComponent } from "./pages/login-view/app.ligin-view.component";
import { SectionsViewComponent } from "./pages/sections-view/app.sections-view.component";
import { EditProfileViewComponent } from './pages/editProfile-view/app.editProfile-view.component';


import { AddNoteComponent } from './AddNoteComponent';
import { EditNoteComponent } from './EditNoteComponent';
import { NotFoundComponent } from './NotFoundComponent';


const routerParameters = [{
    path: 'section',
    component: SectionsViewComponent
},{
    path: 'section/:id',
    component: SectionsViewComponent
},{
    path: 'addNote',
    component: AddNoteComponent
},{
    path: 'editNote/:id',
    component: EditNoteComponent
},{
    path: 'register',
    component: RegisterViewComponent
},{
    path: 'login',
    component: LoginViewComponent
},{
    path: 'editProfile',
    component: EditProfileViewComponent
},{
    path: '',
    redirectTo: '/section',
    pathMatch: 'full'
},{
    path: '**',
    component: NotFoundComponent
}];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NotesModule,
        SectionsModule,
        UserModule,
        PagesModule,
        NavbarModule,
        RouterModule.forRoot(routerParameters)
    ],
    declarations: [
        AppComponent,
        AddNoteComponent,
        EditNoteComponent,
        NotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}