import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Section } from './section.model';

@Injectable()
export class SectionsBackend {

    private sectionsUrl:string = 'http://localhost:8080/sections';

    constructor(private http: Http){

    }

    public getSections():Observable<Section[]>{
        return this.http.get(this.sectionsUrl).map(response => response.json() as Section[]);
    }

    public addSection(section: Section):Observable<any> {
        return this.http.post(this.sectionsUrl, section);
    }

}