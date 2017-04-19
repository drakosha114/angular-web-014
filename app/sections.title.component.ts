import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-section-title',
    template: `
        <div class="panel-heading n__section__title">
            <h3 class="panel-title">{{sectionTitle}}</h3>
        </div>
    `,
    styles: ['.n__section__title {color: #333; background-color: #f5f5f5;border-color: #ddd;}']
})
export class SectionsTitleComponent {
    @Input('title') sectionTitle:string;

}
