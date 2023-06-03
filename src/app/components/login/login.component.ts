import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/classes/user';
import { AuthDataService } from 'src/app/services/auth-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { Token } from 'src/app/types/Token';

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
        username: [, Validators.required],
        password: [, Validators.required],
    });

    user: User = new User();
    authResponse: any;
    auth: Auth = new Auth();

    authenticateUser() {
        this.user.username = this.loginForm.value.username!;
        this.user.password = this.loginForm.value.password!;

        this.authService.authenticateUser(this.user).subscribe({
            next: (response: Token) => {
                window.sessionStorage.setItem('Authorization', response.token);

                this.auth.user = this.user;
                this.auth.loggedIn = true;
                this.auth.token = response.token;

                this.authDataService.setAuth(this.auth);

                this.router.navigate(['/home']);
            },
            error: (error) => {
                if (error.status == 403)
                    console.error('Auth failed');
            },
        });
    }
}

// TODO: Don't let the user pass through if 403
