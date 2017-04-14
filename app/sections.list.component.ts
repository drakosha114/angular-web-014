import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Http, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

interface Section {
    title: string,
    _id: string
}

@Component({
    selector: 'app-section-list',
    template: `
        <ul class="list-group n__section__list">
            <li *ngFor="let section of sections" class="n__section__list__item list-group-item" [ngClass]="{active:section.title==activeSection }"
                (click)="showSection(section)">
                {{section.title}}
            </li>
        </ul>`,
    styles: ['.list-group.n__section__list { margin-bottom: 0;}', '.n__section__list__item {border-width: 1px 0;border-radius: 0;}']
})
export class SectionList implements OnInit{

    sections: Section[];
    private sectionsUrl = 'http://localhost:8080/sections';
    activeSection: string;
    @Output() sectionChanged: EventEmitter<string> =
        new EventEmitter<string>();

    constructor(private http: Http){

    }
    ngOnInit (){
        this.readSections();
    }

    readSections() {
        this.getSections().subscribe(sections=>{
            this.sections=sections;
            if (this.activeSection == null && this.sections.length>0) {
                this.showSection(this.sections[0]);
            }
        });
    }

    getSections(): Observable<Section[]> {
        return this.http.get(this.sectionsUrl)
            .map(response => response.json() as Section[]);
    }

    showSection(section:Section) {
        this.activeSection = section.title;
        this.sectionChanged.emit(this.activeSection);
    }
}
