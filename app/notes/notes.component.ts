import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription }  from 'rxjs/Subscription';

import { Note } from './shared/note.model';

@Component({
    selector: 'app-notes',
    templateUrl: 'app/notes/notes.component.html',
    styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy{

    private title: string;
    private section: string;
    private subscribe: Subscription;


    constructor(private activatedRoute: ActivatedRoute){

    }

    ngOnInit () {
        this.subscribe = this.activatedRoute.params.subscribe( (params) => {
            this.section = params['id'];
        });

        this.title = 'Notes'
    }

    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }

}