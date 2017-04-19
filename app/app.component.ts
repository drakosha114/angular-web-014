import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentSectionService } from './current.section.service';
import { SectionsService } from './sections.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="page-header">
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
           
        </div>
    `,
    providers: [ CurrentSectionService, SectionsService ]
})
export class AppComponent implements OnInit, OnDestroy{

    private section: string;
    subscription: Subscription;

    constructor(private currentSectionService: CurrentSectionService ) {
        this.subscription = currentSectionService.currentSection$.subscribe((section) => {
            this.section = section;
            console.log(section);
        })
    }

    ngOnInit() {
        this.currentSectionService.changeCurrentSection('work');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
