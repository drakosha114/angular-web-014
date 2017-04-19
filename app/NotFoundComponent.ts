import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-pageNotFound',
    template: `
        <div class="page page__not_found row">
            <div class="col-lg-12">
                <div class="jumbotron">
                    <h1>Page not found!</h1>
                    <p>
                        <a class="btn btn-primary btn-lg" routerLink="/" routerLinkActive="active">Go home</a>
                    </p>
                </div>
            </div>
        </div>
    `,
    styleUrls: []
})
export class NotFoundComponent {

}