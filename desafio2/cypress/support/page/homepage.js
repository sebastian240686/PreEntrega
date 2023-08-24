export class HomePage{

    constructor(){

        this.onlineButton = '#onlineshoplink';
    }

    clickOnlineButton(){
        cy.get(this.onlineButton).click();
    }
}