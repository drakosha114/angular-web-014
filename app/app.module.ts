import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { NotesModule } from './notes/notes.module';
import { SectionsModule } from './sections/sections.module';

import { AppComponent }   from './app.component';
import { SectionComponent } from './SectionComponent';
import { AddNoteComponent } from './AddNoteComponent';
import { EditNoteComponent } from './EditNoteComponent';
import { NotFoundComponent } from './NotFoundComponent';
import { MainPageComponent } from './MainPageComponent';
import { AppNavbarComponent } from './AppNavbarComponent';

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
        RouterModule.forRoot(routerParameters)
    ],
    declarations: [
        AppComponent,
        SectionComponent,
        AddNoteComponent,
        EditNoteComponent,
        NotFoundComponent,
        MainPageComponent,
        AppNavbarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}