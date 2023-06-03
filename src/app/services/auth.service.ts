import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from '../classes/change-password';
import { User } from '../classes/user';
import { Token } from '../types/Token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient) {}

    baseURL: string = 'http://localhost:8040';

    authenticateUser(user: User) {
        return this.httpClient.post<Token>(`${this.baseURL}/users/login`, user);
    }

    registerUser(user: User) {
        return this.httpClient.post<Token>(`${this.baseURL}/users/register`, user);
    }

    logoutUser(token: string) {
        return this.httpClient.post(`${this.baseURL}/users/logout`, {
            Authorization: token,
        });
    }

    changePassword(newPasswordRequest: ChangePassword) {
        return this.httpClient.post(
            `${this.baseURL}/users/forgot-password`,
            newPasswordRequest,
            {
                observe: 'response',
            }
        );
    }
}
