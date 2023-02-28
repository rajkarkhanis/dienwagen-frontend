import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChangePassword } from 'src/app/classes/change-password';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    forgotPasswordForm = this.formBuilder.group({
        username: [],
        newPassword: [],
        confirmPassword: [],
    });

    newPasswordRequest: ChangePassword = new ChangePassword();

    changePassword() {
        this.newPasswordRequest.username =
            this.forgotPasswordForm.value.username!;
        this.newPasswordRequest.newPassword =
            this.forgotPasswordForm.value.newPassword!;
        this.newPasswordRequest.confirmPassword =
            this.forgotPasswordForm.value.confirmPassword!;

        this.authService
            .changePassword(this.newPasswordRequest)
            .subscribe((response) => console.log(response));
    }
}
