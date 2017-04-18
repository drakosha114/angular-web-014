import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


interface Section {
    title: string,
    _id?: string
}

@Injectable()
export class SectionsService {

    constructor(private http: Http) {

    }

    private sections = new Subject<Section[]>();
    private sectionsUrl = 'http://localhost:8080/sections';

    sections$ = this.sections.asObservable();



    private getSections(): Observable<Section[]> {
        return this.http.get(this.sectionsUrl)
            .map(response => response.json() as Section[]);
    }

    private addNewSection(section: Section): Observable<any> {
        return this.http.post(this.sectionsUrl, section)
    }

    addSection (title: string) {

        let section = {
            title: title
        };

        this.addNewSection(section).subscribe( () => {
            this.readSections();
        });
    }

    readSections() {
        this.getSections().subscribe(Sections=>{
            this.sections.next(Sections);
        });
    }

}