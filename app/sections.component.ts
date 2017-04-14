import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-sections',
    template: `<div class="panel panel-default n__sections">
        <app-section-title [title]="title"></app-section-title>
        <div class="panel-body">
           sadsadsad
        </div>
        <app-section-list (sectionChanged)="setSection($event)"></app-section-list>
    </div>`
})
export class SectionsComponent implements  OnInit{
    title :string;
    @Input('setSection') setSection;
    ngOnInit (){
        this.title = "Sections";
    }
}
