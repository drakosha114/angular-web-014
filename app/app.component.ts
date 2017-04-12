import { Component } from '@angular/core';
import { NotesTitle } from './notes.title.component';
import { NotesList } from './notes.list.component';

@Component({
    selector: 'my-app',
    template: `
        <notes-title></notes-title>
        <notes-list></notes-list>
    `
})
export class AppComponent { }
