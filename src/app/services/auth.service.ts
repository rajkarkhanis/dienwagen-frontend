import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient) {}

    baseURL: string = 'http://localhost:8040';

    authenticateUser(user: User) {
        return this.httpClient.post(`${this.baseURL}/users/login`, user);
    }

    registerUser(user: User) {
        return this.httpClient.post(`${this.baseURL}/users/register`, user);
    }

    logoutUser(token: string) {
        return this.httpClient.post(`${this.baseURL}/users/logout`, {
            Authorization: token
        });
    }
}
