import { Component, Input, OnInit } from '@angular/core';
import { Http, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface Note {
    text: string;
    section: string;
}

@Component({
    selector: 'notes-list',
    template: `
        <div class="notes__create">
            <div class="notes___create__row">
                <textarea class="notes___create__textarea" [(ngModel)]="text" ></textarea>
            </div>
            <div class="notes___create__row">
                <button [disabled]="!text" class="notes___create__button" type="button" (click)="add()">Add</button>
            </div>
        </div>
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
export class NotesList implements OnInit{

    notes: Note[];
    private notesUrl = 'http://localhost:8080/notes';
    text: string;
    @Input() section: string;

    constructor(private http: Http) {

    }

    ngOnInit() {
        this.readNotes();
    }
    ngOnChanges(){
        this.readNotes();
    }

    add() {
        if (!this.text) {
            return;
        }
        let note = {
            text: this.text,
            section: this.section
        }
        this.addNote(note);
        this.text = '';
    }

    readNotes() {
        this.getNotes().then(notes=>{
            this.notes=notes;
            console.log(this.section);
        });
    }

    getNotes(): Promise<Note[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('section', this.section);
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
        console.log(note);
        this.http.post(this.notesUrl, note).toPromise()
            .then(response => {
                console.log("note sent, response", response);
                this.readNotes();
            } );
    }
}
//TODO: передать активную секцию