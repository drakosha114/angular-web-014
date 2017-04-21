import { Component } from '@angular/core';

@Component({
    selector: 'app-add-note',
    template: `
        <div class="page page__addNote row">
            <div class="col-md-12">
                <div class="page-header">
                    <h1>Add new Note</h1>
                </div>
                <div class="page-body">
                    <app-notes-addNote></app-notes-addNote>
                </div>
            </div>            
        </div>
    `
})
export class AddNoteComponent {

}
