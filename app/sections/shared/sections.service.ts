import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Section } from './section.model';
import { SectionsBackend } from './section.backend';

@Injectable()
export class SectionsService {

    private sections = new Subject<Section[]>();
    public sectionsStream$ = this.sections.asObservable();

    constructor(private sectionsBackend: SectionsBackend) {

    }

    public getSections(){
        this.sectionsBackend.getSections().subscribe((sections: Section[])=> {
            this.sections.next(sections);
        });
    }

}