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



import { SectionComponent } from './SectionComponent';
import { AddNoteComponent } from './AddNoteComponent';
import { EditNoteComponent } from './EditNoteComponent';
import { NotFoundComponent } from './NotFoundComponent';
import { MainPageComponent } from './MainPageComponent';


const routerParameters = [{
    path: 'section',
    component: SectionComponent
},{
    path: 'section/:id',
    component: SectionComponent
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
        SectionComponent,
        AddNoteComponent,
        EditNoteComponent,
        NotFoundComponent,
        MainPageComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}