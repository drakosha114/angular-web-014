import { Component, Input, Output, OnInit, OnDestroy, EventEmitter  } from '@angular/core';
import { SectionsService } from './sections.service';
import { Subscription }   from 'rxjs/Subscription';

interface Note {
    title: string,
    _id?: string,
    body: string,
    section: string
}

interface Section {
    title: string;
    _id: string;
}

@Component({
    selector: 'app-notes-addNote',
    template: `
        <div class="notes__create panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Add new note</h3>
            </div>
            <div class="panel-body">
                <div class="notes___create__row form-group">
                    <label for="noteTitle">Title</label>
                    <input id="noteTitle" type="text" class="notes___create__input form-control" [(ngModel)]="title">
                </div>
                <div class="notes___create__row form-group">
                    <label for="noteBody">Message</label>
                    <textarea id="noteBody" class="notes___create__textarea form-control" [(ngModel)]="body"></textarea>
                </div>
                <div class="notes___create__row form-group">
                    <label for="section">Section</label>
                    <select id="section" class="form-control" [(ngModel)]="section">
                        <option *ngFor="let section of sections" value="{{section.title}}" >{{section.title}}</option>
                    </select>
                </div>
                <div class="notes___create__row form-group text-right">
                    <button [disabled]="!title&&!body&&section===currentSection" type="button" class="notes___create__button btn btn-default" (click)="reset()">Reset changes</button>
                    <button [disabled]="!title||!body" class="notes___create__button btn btn-primary" type="button" (click)="add()">Add new note</button>
                </div>
            </div>
        </div>
    `
})
export class NotesAddNoteComponent implements OnInit, OnDestroy{

    private title: string;
    private body: string;
    private section: string;
    private sections: Section[];
    private sectionSubscription: Subscription;

    @Input('section') currentSection: string;
    @Output() addNewNote: EventEmitter<Note> = new EventEmitter<Note>();

    constructor (private sectionsService: SectionsService) {
        this.sectionSubscription = sectionsService.sections$.subscribe( (sections: Section[]) => {
           this.sections = sections;
        });
    }

    ngOnInit(){
        this._resetFields();
        this._getSections();
    }

    ngOnDestroy(){
        this.sectionSubscription.unsubscribe();
    }

    private _resetFields() {
        this.title = '';
        this.body = '';
        this.section = this.currentSection;
    }

    private _getSections() {
        this.sectionsService.readSections();
    }

    reset() {
        this._resetFields();
    }

    add() {

        let note = {
            title: this.title,
            body: this.body,
            section: this.section
        };

        this.addNewNote.emit(note);
        this._resetFields()
    }
}
