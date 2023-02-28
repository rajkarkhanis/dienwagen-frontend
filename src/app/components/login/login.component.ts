import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/classes/user';
import { AuthDataService } from 'src/app/services/auth-data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private authDataService: AuthDataService,
        private router: Router
    ) {}

    loginForm = this.formBuilder.group({
        username: [],
        password: [],
    });

    user: User = new User();
    authResponse: any;
    auth: Auth = new Auth();

    authenticateUser() {
        this.user.username = this.loginForm.value.username!;
        this.user.password = this.loginForm.value.password!;

        this.authService.authenticateUser(this.user).subscribe((response) => {
            this.authResponse = response;
            console.log(this.authResponse)
            window.sessionStorage.setItem(
                'Authorization',
                this.authResponse.token
            );

            this.auth.user = this.user;
            this.auth.loggedIn = true;
            this.auth.token = this.authResponse.token;

            this.authDataService.setAuth(this.auth);
        });

        this.router.navigate(['/home']);
    }
}
