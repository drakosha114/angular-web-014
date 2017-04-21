import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { SectionsService } from '../../sections/shared/sections.service';
import { Section } from '../../sections/shared/section.model';

@Component({
    selector: 'app-notes-addNote',
    templateUrl: 'app/notes/notes-addNote/notes-addNote.component.html',
    styleUrls: ['app/notes/notes-addNote/notes-addNote.component.css'],
    providers: [NoteService, SectionsService]
})
export class NotesAddNoteComponent implements OnInit, OnDestroy{

    private title: string;
    private section: string;
    private body: string;
    private sections: Section[];
    private sectionsSubscription: Subscription;

    constructor (private noteService: NoteService, private sectionsService: SectionsService) {
        this.sectionsSubscription = this.sectionsService.sectionsStream$.subscribe((sections: Section[])=>{
            this.sections = sections;
        })
    }

    ngOnInit() {
        this.sectionsService.getSections();
    }

    ngOnDestroy() {
        this.sectionsSubscription.unsubscribe();
    }

    add() {

        let note: Note = {
            title: this.title,
            section: this.section,
            body: this.body
        };

        this.noteService.addNote(note).subscribe(()=>{
            this.reset();
        });
    }

    reset () {
        this.title = '';
        this.section = '';
        this.body = '';
    }
}