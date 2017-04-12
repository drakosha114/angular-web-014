import { Component } from '@angular/core';
import { Http, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface Note {
    text: string;
}

@Component({
    selector: 'notes-list',
    template: `
        <div class="notes__create">
            <div class="notes___create__row">
                <textarea class="notes___create__textarea" [(ngModel)]="text" ></textarea>
            </div>
            <div class="notes___create__row">
                <button class="notes___create__button" type="button" (click)="addNote()">Add</button>
            </div>
        </div>
        <ul class="notes__list">
            <li *ngFor="let note of notes " class="notes__item">
                <div class="notes__item__text"> {{note.text}}</div>
                <div class="notes__item__button">
                    <button type="button" (click)="removeNote(note.id)" ></button>
                </div>
            </li>
        </ul>
    `
})
export class NotesList{

    notes: Note[];
    private notesUrl = 'http://localhost:8080/notes';
    text: string;

    constructor(private http: Http) {
        this.readNotes();
    }

    readNotes() {
        this.getNotes().then(notes=>{
            this.notes=notes;
            console.log(notes);
        });
    }

    getNotes(): Promise<Note[]> {
        return this.http.get(this.notesUrl)
            .toPromise()
            .then(response => response.json() as Note[]);
    }

    removeNote(id:string) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);
        this.http.delete(this.notesUrl, { search: params })
            .toPromise()
            .then(response => {
                console.log(
                    `note with id ${id} removed, response`, response);
                this.readNotes();
            });
    }

    addNote(note:Note) {
        this.http.post(this.notesUrl, note).toPromise()
            .then(response => {
                console.log("note sent, response", response);
                this.readNotes();
            } );
    }


}