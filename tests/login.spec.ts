import {test , expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { testData } from '../test-data/testData';

test('user can login successfully',async({page})=> {
    const loginPage=new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testData.login.username,testData.login.password);
    await expect(page).toHaveURL(/inventory/);

});