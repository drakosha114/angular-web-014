import {Component, Input} from '@angular/core';

@Component({
    selector: 'notes-title',
    template: `<h1 class="n__title">{{title}} <small>from {{section}} section</small></h1>`
})
export class NotesTitle {

    @Input('title') title: string;
    @Input('section') currentSection: string;
}