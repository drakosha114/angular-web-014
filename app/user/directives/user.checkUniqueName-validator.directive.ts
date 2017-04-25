import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import { UserService } from "../shared/user.service";
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

@Directive({
    selector: '[validateUniqueUserName][userUniqueValid],[validateUniqueUserName][ngModel]',
    providers: [{provide:NG_VALIDATORS, useExisting: CheckUniqueUserNameDirective, multi: true}]
})
export class CheckUniqueUserNameDirective implements Validator {

    constructor(@Attribute("validateUniqueUserName") public validateUniqueUserName: string, private userService: UserService) {

    }

    validate(c: AbstractControl): Promise<{[key: string]: any}> {
        return new Promise((resolve)=>{

            let name = c.value;

            this.userService.checkUserUnique(name).subscribe((resp)=>{
                if ( name && resp === false ) {
                    c.setErrors({validateUniqueUserName: resp});
                    resolve({validateUniqueUserName: resp});
                } else {
                    c.setErrors(null);
                    resolve(null);
                }
            });
        });
    }

}