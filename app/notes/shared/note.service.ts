import { Injectable } from '@angular/core';

import { Note } from './note.model';
import { NotesBackend } from './notes.backend';

@Injectable()
export class NoteService{

    constructor(private notesBackend: NotesBackend) {

    }

    public deleteNote(id:string) {
        return this.notesBackend.deleteNote(id);
    }

    public addNote(note: Note) {
        return this.notesBackend.addNote(note);
    }



}