import {Page,Locator} from '@playwright/test';
export class CheckoutPage{

    readonly page:Page;
    readonly firstNameInput:Locator;
    readonly lastNameInput:Locator;
    readonly postalCodeInput:Locator;
    readonly continueButton:Locator;
    readonly cancelButton:Locator;
    constructor(page:Page){
        this.page=page;


        this.firstNameInput=page.getByLabel("First Name");
        this.lastNameInput=page.getByLabel("Last Name");
        this.postalCodeInput=page.getByLabel("Zip/Postal Code");
        this.continueButton=page.getByRole("button",{name:"Continue"});
        this.cancelButton=page.getByRole("button",{name:"Cancel"});
    }
    async enterFirstName(firstName:string){
        await this.firstNameInput.fill(firstName);
    }
    async enterLastName(lastName:string){
        await this.lastNameInput.fill(lastName);
    }
    async enterPostalCode(postalCode:string){
        await this.postalCodeInput.fill(postalCode);
    }
    async clickContinue(){
        await this.continueButton.click();
    }
    async clickCancel(){
        await this.cancelButton.click();
    }

    // combine above three methods

    async fillCheckoutInformation(firstName:string,lastName:string,postalCode:string){
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
    }
}
