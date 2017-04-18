import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class CurrentSectionService {
    private currentSection = new Subject<string>();

    currentSection$ = this.currentSection.asObservable();

    changeCurrentSection(section: string) {
        this.currentSection.next(section);
    }
}