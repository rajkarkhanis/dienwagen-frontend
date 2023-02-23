import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Auth } from '../classes/auth';
import { User } from '../classes/user';

@Injectable({
    providedIn: 'root',
})
export class AuthDataService {
    constructor() {}

    auth: Auth = new Auth();
    authSubject: Subject<Auth> = new Subject<Auth>();

    getAuth() : Auth {
        return this.auth;
    }

    setAuth(newAuth: Auth) {
        this.auth = newAuth;
        this.authSubject.next(this.auth)
    }
}
