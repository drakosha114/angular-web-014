import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription }  from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { SectionsService } from '../shared/sections.service';
import { Section } from '../shared/section.model';

@Component({
    selector: 'app-sections-list',
    templateUrl: 'app/sections/sections-list/sections-list.component.html',
    styleUrls: ['app/sections/sections-list/sections-list.component.css']
})
export class SectionsListComponent implements OnInit, OnDestroy{

    @Input('section') activeSection: string;
    private sections: Section[];
    private sectionsSubscription: Subscription;

    constructor(private sectionsService: SectionsService, private router: Router) {
        this.sectionsSubscription = this.sectionsService.sectionsStream$.subscribe((sections: Section[])=>{
            this.sections = sections;
        })
    }

    ngOnInit(){
        this.sectionsService.getSections();
    }

    ngOnDestroy(){
        this.sectionsSubscription.unsubscribe();
    }

    showSection (section: string) {
        this.router.navigate(['/section/', section]);
    }

}