import  { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navigation',
    template: `
        <nav class="navbar navbar-inverse navbar-static-top">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Brand</a>
                </div>


                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">           
                   
                    <ul class="nav navbar-nav navbar-right">
                        <li><a routerLink="/addNote" routerLinkActive="active">Add New Note</a></li>
                    </ul>
                </div>
            </div>
        </nav>    
    `
})
export class AppNavbarComponent {

}