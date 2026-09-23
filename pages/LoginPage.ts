import {Page} from '@playwright/test';
export class LoginPage{
    constructor(private page:Page){}

    private usernameInput=this.page.getByPlaceholder("Username");
    private passwordInput=this.page.getByPlaceholder("Password");
    private loginbutton=this.page.getByRole('button',{name:"Login"});

    async open(){
        await this.page.goto("https://www.saucedemo.com/");
    }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginbutton.click();

    }


}