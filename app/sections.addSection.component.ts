import { Component, OnInit, Input } from '@angular/core';
import { Http, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

interface Section {
    title: string
}

@Component({
    selector: 'app-sections-addSection',
    template: ``
})
export class SectionsAddSection {

    private sectionsURl: string = 'http://localhost:8080/notes';
    section: Section;
    private text: string;

    constructor (private http: Http) {
        this.text = '';
    }

    textareaOnKeyupHandler (text:string):void {

    }
    addSection () {

    }



}
