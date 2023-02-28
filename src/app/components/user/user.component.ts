import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/classes/user';
import { AuthDataService } from 'src/app/services/auth-data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent {
    auth: Auth = new Auth();

    constructor(
        private authService: AuthService,
        private authDataService: AuthDataService,
        private router: Router
    ) {
        authDataService.authSubject.subscribe((res) => (this.auth = res));
    }

    logoutUser() {
        this.authService.logoutUser(this.auth.token);
        this.auth.loggedIn = false;
        window.sessionStorage.removeItem("Authorization")
        this.router.navigate(['/'])
    }
}
