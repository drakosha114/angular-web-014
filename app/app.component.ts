import { Component } from '@angular/core';
import {UserLoginService} from "./user/shared/user.login.service";

@Component({
    selector: 'my-app',
    template: `
        <app-navbar></app-navbar>
        <div class="container">
            <router-outlet></router-outlet>           
        </div>
    `,
    providers: [UserLoginService]
})
export class AppComponent {

}
