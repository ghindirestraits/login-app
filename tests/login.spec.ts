import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test('deve logar com sucesso', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.go();
    await loginPage.signIn('qa', 'cademy');
    await loginPage.userLoggedIn();

});

test('senha incorreta', async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.go();
    await loginPage.signIn('qa', 'abc123');
    await loginPage.toastMessage('Oops! Credenciais inválidas :(');

});
