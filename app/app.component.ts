import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentSectionService } from './current.section.service';
import { SectionsService } from './sections.service';
import { NotesService } from './notes.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'my-app',
    template: `
        <app-navigation></app-navigation>
        <div class="container">
            <router-outlet></router-outlet>           
        </div>
    `,
    providers: [ CurrentSectionService, SectionsService, NotesService ]
})
export class AppComponent implements OnInit, OnDestroy{

    private section: string;
    subscription: Subscription;

    constructor(private currentSectionService: CurrentSectionService ) {
        this.subscription = currentSectionService.currentSection$.subscribe((section) => {
            this.section = section;
        })
    }

    ngOnInit() {
        this.currentSectionService.changeCurrentSection('work');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
/*
* <div class="page-header">
 <h1>Notes application</h1>
 </div>
 <div class="row">
 <div class="col-md-8">
 <app-notes></app-notes>
 </div>
 <div class="col-md-4">
 <app-sections></app-sections>
 </div>
 </div>
*
* */