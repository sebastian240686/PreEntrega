///<reference types = 'cypress' />
export class HomePage{

    constructor(){

        this.onlineButton = '#onlineshoplink';
        this.shoppingCartButton= '#goShoppingCart';
       this.showTotalPriceButton = '.css-n1d5pa > .chakra-button';
    }

    clickOnlineButton(){
        cy.get(this.onlineButton).click();
    }

    clickshoppingCartButton(){
        cy.get(this.shoppingCartButton).click();
    }
    clickshowTotalPriceButton(){
        cy.get(this.showTotalPriceButton).click();
    }
}