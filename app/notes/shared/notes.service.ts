import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Note } from './note.model';
import { NotesBackend } from './notes.backend';

@Injectable()
export class NotesService {

    private notes = new Subject<Note[]>();

    notes$ = this.notes.asObservable();

    constructor (private notesBackend: NotesBackend) {

    }

    readNotes(category?:string) {
        this.notesBackend.getNotes(category).subscribe((Notes: Note[]) => {
            this.notes.next(Notes);
        });
    }

}
