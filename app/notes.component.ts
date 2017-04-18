import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from './notes.service';
import { CurrentSectionService } from './current.section.service';
import { Subscription }  from 'rxjs/Subscription';

import { NotesList } from './notes.list.component';
import { NotesAddNoteComponent } from './notes.addNote.component';
import { NotesTitle } from './notes.title.component';

interface Note {
    title: string,
    id: string,
    section: string
}

@Component({
    selector: 'app-notes',
    template: `
        <div class="n__notes">
            <notes-title [title]="title" [section]="currentSection"></notes-title>
            <notes-list [notes]="notes" (deleteNote)="removeNote($event)"></notes-list>
        </div>
    `,
    providers: [ NotesService, CurrentSectionService ]
})
export class NotesComponent implements OnInit,OnDestroy{

    title: string = '';
    currentSection: string;
    notes: Note[];
    subscriptionCurrentSection: Subscription;
    subscriptionNotes: Subscription;

    constructor (private currentSectionService: CurrentSectionService, private notesService: NotesService) {

        this.subscriptionCurrentSection = currentSectionService.currentSection$.subscribe( (nextSection: string) => {
            console.log(nextSection);
            this.currentSection = nextSection;
            this._readNotes();
        });

        this.subscriptionNotes = notesService.notes$.subscribe( (notes: Note[]) => {
            this.notes = notes;
        });

    }

    ngOnInit() {
        this.title = 'My notes';
        this._readNotes();
    }

    ngOnDestroy() {
        this.subscriptionNotes.unsubscribe();
        this.subscriptionCurrentSection.unsubscribe()
    }

    private _readNotes() {
        this.notesService.readNotes(this.currentSection);
    }

    removeNote (noteId: string) {
        console.log(noteId);
    }
}
