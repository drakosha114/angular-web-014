import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sections-title',
    templateUrl: 'app/sections/sections-title/sections-title.component.html',
    styleUrls: ['app/sections/sections-title/sections-title.component.css']
})
export class SectionsTitleComponent {
    @Input('title') sectionTitle:string;
}