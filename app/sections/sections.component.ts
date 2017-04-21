import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-sections',
    templateUrl: 'app/sections/sections.component.html',
    styleUrls: ['app/sections/sections.component.css']
})
export class SectionsComponent implements OnInit, OnDestroy{
    private title: string;
    private section: string;
    private sectionSubscription: Subscription;

    constructor(private activateRoute: ActivatedRoute) {

    }

    ngOnInit(){
        this.sectionSubscription = this.activateRoute.params.subscribe( (params) => {
            this.section = params['id'];
        });

        this.title = 'Sections';
    }

    ngOnDestroy(){
        this.sectionSubscription.unsubscribe();
    }
}