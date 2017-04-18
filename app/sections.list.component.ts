import { Component, Output, EventEmitter, OnInit,  Input } from '@angular/core';

interface Section {
    title: string,
    _id?: string
}

@Component({
    selector: 'app-section-list',
    template: `
        <ul class="list-group n__section__list">
            <li *ngFor="let section of sections" class="n__section__list__item list-group-item" [ngClass]="{ active:section.title === activeSection }"
                (click)="showSection(section)">
                {{section.title}}
            </li>
        </ul>`,
    styles: ['.list-group.n__section__list { margin-bottom: 0;}', '.n__section__list__item {border-width: 1px 0;border-radius: 0;}']
})
export class SectionList implements OnInit{

    @Input('Sections') sections: Section[];
    @Input('section') activeSection: string;
    @Output() changeCurrentSection: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit (){}

    showSection(section:Section) {
        this.changeCurrentSection.emit(section.title);
    }

}
