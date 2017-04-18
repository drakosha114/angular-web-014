import { Component, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-sections-addSection',
    template: `
        <div class="row">
            <div class="col-lg-12">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Add new section" [(ngModel)]="text">
                    <span class="input-group-btn">
                        <button  [disabled]="!text" (click)="add()" class="btn btn-primary" type="button">Add section!</button>
                    </span>                    
                </div>
            </div>  
        </div>`
})
export class SectionsAddSection {

    private text: string;

    @Output() addNewSection: EventEmitter<string> =
        new EventEmitter<string>();

    constructor () {
        this.text = '';
    }

    add () {
        this.addNewSection.emit(this.text);
        this.text = '';
    }

}
