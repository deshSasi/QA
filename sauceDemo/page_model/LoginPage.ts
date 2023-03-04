import { Selector, t } from 'testcafe';

class LoginPage {
    usernameField: Selector;
    passwordField: Selector;
    loginButton: Selector;

    constructor() {
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('#login-button');
    }

    async login(username: string, password: string) {
        await t.typeText(this.usernameField, username)
               .typeText(this.passwordField, password)
               .click(this.loginButton);
    }
}

export default LoginPage;