import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
        <app-navigation></app-navigation>
        <div class="container">
            <router-outlet></router-outlet>           
        </div>
    `,
    providers: [ ]
})
export class AppComponent {

}
