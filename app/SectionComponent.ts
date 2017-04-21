import { Component } from '@angular/core';

@Component({
    selector: 'app-section',
    template: `
        <div class="page page__section row">
            <div class="col-md-8">
                <app-notes></app-notes>
            </div>
            <div class="col-md-4">
                <app-sections></app-sections>
            </div>            
        </div>
    `,
    styleUrls: []
})
export class SectionComponent {

}
