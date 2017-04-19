import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import  { NotesTitle } from './notes.title.component';
import { NotesList } from './notes.list.component';
import { HttpModule }    from '@angular/http';
import { SectionsComponent } from './sections.component';
import { SectionsTitleComponent } from './sections.title.component';
import { SectionList } from './sections.list.component';
import { SectionsAddSection } from './sections.addSection.component';
import { CurrentSectionService } from './current.section.service';
import { SectionsService } from './sections.service';
import { NotesComponent } from './notes.component';
import { NotesAddNoteComponent } from './notes.addNote.component';
import { SectionComponent } from './SectionComponent';
import { AddNoteComponent } from './AddNoteComponent';
import { EditNoteComponent } from './EditNoteComponent';
import { NotFoundComponent } from './NotFoundComponent';
import { MainPageComponent } from './MainPageComponent';
import { AppNavbarComponent } from './AppNavbarComponent';

const routerParameters = [{
    path: 'section',
    component: MainPageComponent
},{
    path: 'section/:id',
    component: SectionComponent
}, {
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
}]

@NgModule({
    imports: [ BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routerParameters)],
    declarations: [ AppComponent,
        NotesTitle,
        NotesList,
        SectionsComponent,
        SectionsTitleComponent,
        SectionList,
        SectionsAddSection,
        NotesComponent,
        NotesAddNoteComponent,
        SectionComponent,
        AddNoteComponent,
        EditNoteComponent,
        NotFoundComponent,
        MainPageComponent,
        AppNavbarComponent
    ],
    providers: [ CurrentSectionService,
        SectionsService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}