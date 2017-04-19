import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

interface Note {
    title: string,
    id?: string,
    section: string,
    body: string
}

@Injectable()
export class NotesService {

    constructor(private http: Http) {

    }

    private notes = new Subject<Note[]>();
    private notesUrl = 'http://localhost:8080/notes';

    notes$ = this.notes.asObservable();

    readNotes(currentSection: string) {
        this.getNotes(currentSection).subscribe((Notes: Note[]) => {
            this.notes.next(Notes);
        });
    }

    getNotes(currentSection: string): Observable<Note[]>  {

        let params: URLSearchParams = new URLSearchParams();
        params.set('section', currentSection);

        return this.http.get(this.notesUrl, {search: params}).map(response => response.json() as Note[]);

    }

    removeNote(id:string, section: string) {

        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id);

        this.http.delete(this.notesUrl, { search: params }).subscribe(()=>{
            this.readNotes(section)
        });

    }

    addNote(note:Note, section:string) {

        this.http.post(this.notesUrl, note).subscribe(() => {
            this.readNotes(section)
        });

    }


}
