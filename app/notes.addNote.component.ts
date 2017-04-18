import { Component, Input, OnInit } from '@angular/core';

interface Note {
    title: string,
    _id?: string,
    body: string,
    section: string
}

@Component({
    selector: 'app-notes-addNote',
    template: `
        <div class="notes__create">
            <div class="notes___create__row">
                <textarea class="notes___create__textarea" [(ngModel)]="text" ></textarea>
            </div>
            <div class="notes___create__row">
                <button [disabled]="!text" class="notes___create__button" type="button" (click)="add()">Add</button>
            </div>
        </div>
    `
})
export class NotesAddNoteComponent {

}
