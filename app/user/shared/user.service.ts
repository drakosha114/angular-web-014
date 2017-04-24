import { Injectable } from '@angular/core';

import { UsersBackend } from './users.backend';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(private usersBackend: UsersBackend) {

    }

    addUser(user:User) {
        return this.usersBackend.addUser(user);
    }

    checkUserUnique(userName: string) {
        return this.usersBackend.checkUniqueUser(userName);
    }

}