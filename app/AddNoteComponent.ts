import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from './notes.service';
import { CurrentSectionService } from "./current.section.service";
import { Subject }    from 'rxjs/Subject';


interface Note {
    title: string,
    _id?: string,
    section: string,
    body: string
}

@Component({
    selector: 'app-add-note',
    template: `
        <div class="page page__addNote row">
            <div class="col-md-12">
                <div class="page-header">
                    <h1>Add new Note</h1>
                </div>
                <!--
                <app-notes-addNote (addNewNote)="addNote($event)" [section]="currentSection"></app-notes-addNote>
                -->
            </div>            
        </div>
    `,
    styleUrls: [],
    providers: []
})
export class AddNoteComponent implements OnInit, OnDestroy{
/*
    private currentSection: Subject<string>;

    constructor(private notesService: NotesService, private currentSectionsService: CurrentSectionService) {

    }

    ngOnInit(){
        this.currentSection = this.currentSectionsService.getCurrentSection();
        console.log(this.currentSection);
    }

    ngOnDestroy(){

    }
    private _addNewNote(note:Note) {
        //this.notesService.addNote(note, this.currentSection);
    }
    addNote(note: Note) {
        this._addNewNote(note);
    }
    */

    ngOnInit(){

    }

    ngOnDestroy(){

    }
}
