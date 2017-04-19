import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Note {
    title: string,
    section: string,
    _id: string,
    body: string
}

@Component({
    selector: 'notes-list',
    template: `
        <ul class="notes__list">
            <li *ngFor="let note of notes " class="notes__item">
                <div class="page-header">
                    <h3 class="notes__item__title">{{note.title}} <small><span class="label label-primary notes__item__section">{{note.section}}</span></small></h3>
                </div>
                <div class="notes__item__body">{{note.body}}</div>
                <div class="notes__item__button">
                    <button type="button" (click)="removeNote(note._id)" >delete</button>
                </div>
            </li>
        </ul>
    `,
    styleUrls: ['app/notes-list.component.css']
})
export class NotesList {

    @Input('notes') notes: Note[];
    @Output() deleteNote: EventEmitter<string> = new EventEmitter<string>();

    constructor() {};

    removeNote (noteID: string) {
        this.deleteNote.emit(noteID);
    }

}
