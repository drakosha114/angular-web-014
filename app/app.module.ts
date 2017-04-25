import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRouterModule } from './router/router.module';
import { NotesModule } from './notes/notes.module';
import { SectionsModule } from './sections/sections.module';
import { UserModule } from './user/user.module';
import { PagesModule } from './pages/pages.module';
import { NavbarModule } from './navbar/navbar.module';

import { AppComponent }   from './app.component';

import { AddNoteComponent } from './AddNoteComponent';
import { EditNoteComponent } from './EditNoteComponent';
import { NotFoundComponent } from './NotFoundComponent';


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
        AppRouterModule
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