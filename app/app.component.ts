import { Component, OnInit } from '@angular/core';
import { NotesTitle } from './notes.title.component';
import { NotesList } from './notes.list.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="page-header">
                <h1>Notes application</h1>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <notes-title></notes-title>
                    <notes-list [section]="section"></notes-list>
                </div>
                <div class="col-md-4">
                    <app-sections [setSection]="setSection"></app-sections>
                </div>
            </div>
           
        </div>
    `
})
export class AppComponent implements OnInit{

    section: string;
    constructor() {

    }
    ngOnInit() {

    }
    setSection(section:string) {
        this.section = section;
    }

}
