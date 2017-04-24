import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import {UserService} from "../shared/user.service";
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

@Directive({
    selector: '[validateUniqueUserName][ngModel]',
    providers: [{provide:NG_VALIDATORS, useExisting: CheckUniqueUserNameDirective, multi: true}]
})
export class CheckUniqueUserNameDirective implements Validator {

    constructor(@Attribute("validateUniqueUserName") public validateUniqueName: string, private userService: UserService) {

    }

    validate(c: AbstractControl) {
        return null;
    }
    /*
        validate(c: AbstractControl):Observable <{[key: string]: any}> {

            return this.userService.checkUserUnique(c.value)
        }
    */

}