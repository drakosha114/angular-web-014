import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SectionsService } from '../shared/sections.service';
import { SectionService } from '../shared/section.service';
import { Section } from '../shared/section.model';

@Component({
    selector: 'app-sections-addSection',
    templateUrl: 'app/sections/sections-addSection/sections-addSection.component.html',
    styleUrls: ['app/sections/sections-addSection/sections-addSection.component.css']
})
export class SectionsAddSectionComponent implements OnInit, OnDestroy{

    private text: string;
    private sections: Section[];
    private sectionsStream: Subscription;

    constructor(private sectionService: SectionService, private sectionsService: SectionsService) {
        this.sectionsStream = this.sectionsService.sectionsStream$.subscribe((sections: Section[])=>{
            this.sections = sections;
        })
    }


    ngOnInit(){
        this.sectionsService.getSections();
    }

    ngOnDestroy (){
        this.sectionsStream.unsubscribe();
    }

    add(){

        let section: Section = {
            title: this.text
        };

        this.sectionService.addSection(section).subscribe(()=>{
            this.text = '';
            this.sectionsService.getSections();
        });
    }
}