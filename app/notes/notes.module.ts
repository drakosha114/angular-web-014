import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotesComponent } from './notes.component';
import { NotesTitleComponent } from './notes-title.component/notes-title.component';
import { NotesListComponent } from './notes-list.component/notes-list.component';
import { NotesAddNoteComponent } from './notes-addNote/notes-addNote.component';

import { NotesService } from './shared/notes.service';
import { NotesBackend } from './shared/notes.backend';
import { NoteService } from './shared/note.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        NotesComponent,
        NotesTitleComponent,
        NotesListComponent,
        NotesAddNoteComponent
    ],
    exports: [
        NotesComponent,
        NotesTitleComponent,
        NotesListComponent,
        NotesAddNoteComponent
    ],
    providers: [
        NotesService,
        NotesBackend,
        NoteService
    ]
})
export class NotesModule{}