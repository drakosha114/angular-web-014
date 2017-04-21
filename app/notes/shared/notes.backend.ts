import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Note } from './note.model';


@Injectable()
export class NotesBackend {

    private notesUrl:string = 'http://localhost:8080/notes';

    constructor(private http: Http) {}

    private _getAllNotes ():Observable<Note[]> {

        return this.http.get(this.notesUrl).map(response => response.json() as Note[]);

    }

    private _getNotesByCategory (category?:string):Observable<Note[]> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('section', category);

        return this.http.get(this.notesUrl, {search: params}).map(response => response.json() as Note[]);

    }

    public getNotes(category?:string):Observable<Note[]>{

        return category ? this._getNotesByCategory(category) : this._getAllNotes();

    }

    public getNote(id:string) {


    }

    public addNote(note:Note):Observable<any>  {
        return this.http.post(this.notesUrl, note);
    }

    public deleteNote(id:string):Observable<any> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);

        return this.http.delete(this.notesUrl, { search: params });
    }
}
