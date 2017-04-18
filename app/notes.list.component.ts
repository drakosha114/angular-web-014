import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Note {
    text: string;
    section: string;
    _id: string;
}

@Component({
    selector: 'notes-list',
    template: `
        <ul class="notes__list">
            <li *ngFor="let note of notes " class="notes__item">
                <div class="notes__item__text"> {{note.text}}</div>
                <div class="notes__item__text"> {{note.section}}</div>
                <div class="notes__item__button">
                    <button type="button" (click)="removeNote(note._id)" >delete</button>
                </div>
            </li>
        </ul>
    `
})
export class NotesList {

    @Input('notes') notes: Note[];
    @Output() deleteNote: EventEmitter<string> = new EventEmitter<string>();

    constructor() {};

    removeNote (noteID: string) {
        this.deleteNote.emit(noteID);
    }

}
