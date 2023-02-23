import { Component } from '@angular/core';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/classes/user';
import { AuthDataService } from 'src/app/services/auth-data.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent {
    auth: Auth = new Auth();

    constructor(private authDataService: AuthDataService) {
        authDataService.authSubject.subscribe((res) => (this.auth = res));
    }
}
