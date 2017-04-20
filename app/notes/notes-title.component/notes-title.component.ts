import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notes-title',
    templateUrl: 'app/notes/notes-title.component/notes-title.component.html',
    styleUrls: ['app/notes/notes-title.component/notes-title.component.css']
})
export class NotesTitleComponent {
    @Input('title') title: string;
    @Input('section') section: string;
}