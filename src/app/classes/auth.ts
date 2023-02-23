import { User } from './user';

export class Auth {
    public user: User = new User();
    public loggedIn: boolean = false;
    public token: string = '';
}
