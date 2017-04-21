import { Component, Input, OnInit, OnDestroy   } from '@angular/core';
import { NotesService } from '../shared/notes.service';
import { NoteService } from '../shared/note.service';
import { Subscription }  from 'rxjs/Subscription';
import { Note } from '../shared/note.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-notes-list',
    templateUrl: 'app/notes/notes-list.component/notes-list.component.html',
    styleUrls: ['app/notes/notes-list.component/notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {

    @Input('section') section: string;
    private notes: Note[];
    private notesStream: Subscription;
    private urlParamsStream: Subscription;

    constructor (private notesService: NotesService, private noteService: NoteService, private activatedRoute: ActivatedRoute) {
        this.notesStream = notesService.notes$.subscribe( (notes: Note[])=> {
            this.notes = notes;
        });

        this.urlParamsStream = this.activatedRoute.params.subscribe( (params) => {
            this.section = params['id'];
            this._readNotes();
        });
    }

    ngOnInit() {
        this._readNotes();
    }

    ngOnDestroy(){
        this.notesStream.unsubscribe();
        this.urlParamsStream.unsubscribe();
    }

    private _readNotes() {
        this.notesService.readNotes(this.section);
    }

    public _deleteNote(id:string) {
        this.noteService.deleteNote(id).subscribe(()=>{
            this._readNotes();
        })
    }
}