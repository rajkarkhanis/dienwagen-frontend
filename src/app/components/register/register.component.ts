import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/classes/user';
import { AuthDataService } from 'src/app/services/auth-data.service';
import { AuthService } from 'src/app/services/auth.service';

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
        username: [],
        password: [],
    });

    user: User = new User();
    authResponse: any;
    auth: Auth = new Auth();

    registerUser() {
        console.log(this.registerForm.value);

        this.user.username = this.registerForm.value.username!;
        this.user.password = this.registerForm.value.password!;

        this.authService.registerUser(this.user).subscribe((response) => {
            this.authResponse = response;
            window.sessionStorage.setItem(
                'Authorization',
                this.authResponse.token
            );

            this.auth.user = this.user
            this.auth.loggedIn = true;
            this.auth.token = this.authResponse.token

            this.authDataService.setAuth(this.auth)
        });

        // route to home page
        this.router.navigate(['home']);
    }
}
