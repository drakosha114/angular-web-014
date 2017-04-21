import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { Section } from './section.model';
import { SectionsBackend } from './section.backend';

@Injectable()
export class SectionService {


    constructor(private sectionsBackend: SectionsBackend) {

    }

    public addSection (section: Section):Observable<any> {
        return this.sectionsBackend.addSection(section);
    }

}