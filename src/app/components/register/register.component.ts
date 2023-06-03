import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/classes/user';
import { AuthDataService } from 'src/app/services/auth-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { Token } from 'src/app/types/Token';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private authDataService: AuthDataService,
        private router: Router
    ) {}

    registerForm = this.formBuilder.group({
        username: [, Validators.required],
        password: [, Validators.required],
    });

    user: User = new User();
    authResponse: any;
    auth: Auth = new Auth();
    userAlreadyExists: boolean = false;

    registerUser() {
        console.log(this.registerForm.value);

        this.user.username = this.registerForm.value.username!;
        this.user.password = this.registerForm.value.password!;

        this.authService.registerUser(this.user).subscribe({
            next: (response: Token) => {
                window.sessionStorage.setItem('Authorization', response.token);

                this.auth.user = this.user;
                this.auth.loggedIn = true;
                this.auth.token = response.token;

                this.authDataService.setAuth(this.auth);

                this.router.navigate(['home']);
            },

            error: (error) => {
                if (error.status == 403) console.error(error);
            },
        });
    }
}
