import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from './notes.service';
import { CurrentSectionService } from './current.section.service';
import { Subscription }  from 'rxjs/Subscription';

interface Note {
    title: string,
    _id?: string,
    section: string,
    body: string
}

@Component({
    selector: 'app-notes',
    template: `
        <div class="n__notes">
            <app-notes-addNote (addNewNote)="addNote($event)" [section]="currentSection"></app-notes-addNote>
            <notes-title [title]="title" [section]="currentSection"></notes-title>            
            <notes-list [notes]="notes" (deleteNote)="removeNote($event)"></notes-list>
        </div>
    `,
    providers: [ NotesService ]
})
export class NotesComponent implements OnInit,OnDestroy{

    title: string = '';
    currentSection: string;
    notes: Note[];
    subscriptionCurrentSection: Subscription;
    subscriptionNotes: Subscription;

    constructor (private currentSectionService: CurrentSectionService, private notesService: NotesService) {

        this.subscriptionCurrentSection = currentSectionService.currentSection$.subscribe( (nextSection: string) => {
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

    private _addNewNote(note:Note) {
        this.notesService.addNote(note, this.currentSection);
    }

    private _removeNote(id: string, section: string) {
        this.notesService.removeNote(id, section);
    }

    removeNote (noteId: string) {
        this._removeNote(noteId, this.currentSection);
    }

    addNote (note: Note) {
        this._addNewNote(note);
    }
}
