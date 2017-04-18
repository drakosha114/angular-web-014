import { Component, OnInit, OnDestroy } from '@angular/core';
import { SectionsService } from './sections.service';
import { CurrentSectionService } from './current.section.service';
import { Subscription }  from 'rxjs/Subscription';

interface Section {
    title: string,
    _id?: string
}

@Component({
    selector: 'app-sections',
    template: `
        <div class="panel panel-default n__sections">
            <app-section-title [title]="title"></app-section-title>
            <div class="panel-body">
                <app-sections-addSection (addNewSection)="addSection($event)"></app-sections-addSection>
            </div>
            <app-section-list (changeCurrentSection)="changeSection($event)"  [Sections]="sections" [section]="currentSection"></app-section-list>
        </div>`,
    providers: [ SectionsService, CurrentSectionService ]
})
export class SectionsComponent implements  OnInit, OnDestroy {

    sections: Section[];
    currentSection: string;
    title :string;
    subscriptionsServices: Subscription;
    subscriptionCurrentService: Subscription;


    constructor (private sectionService: SectionsService, private currentSectionService: CurrentSectionService) {

        this.subscriptionCurrentService = currentSectionService.currentSection$.subscribe((section) => {
            this.currentSection = section;
        });

        this.subscriptionsServices = sectionService.sections$.subscribe( (data: Section[]) => {
            this.sections = data;
        });
    }

    ngOnInit () {
        this.title = 'Sections';
        this.sectionService.readSections();
    }

    ngOnDestroy () {
        this.subscriptionCurrentService.unsubscribe();
        this.subscriptionsServices.unsubscribe();
    }

    changeSection(nextCurrentSection: string) {
        this.currentSectionService.changeCurrentSection(nextCurrentSection);
    }

    addSection(newSectionTitle: string) {
        this.sectionService.addSection(newSectionTitle);
    }

}
