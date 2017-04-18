import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from './notes.service';
import { CurrentSectionService } from './current.section.service';
import { Subscription }  from 'rxjs/Subscription';


interface Note {
    title: string,
    id: string,
    section: string
}

@Component({
    selector: 'app-notes',
    template: ``,
    providers: [ NotesService, CurrentSectionService ]
})
export class NotesComponent {

    constructor (private currentSectionService: CurrentSectionService, private notesService: NotesService) {

    }


}
