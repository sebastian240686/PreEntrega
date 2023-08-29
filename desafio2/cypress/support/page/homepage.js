///<reference types = 'cypress' />
export class HomePage{

    constructor(){

        
        this.shoppingCartButton= '#goShoppingCart';
       this.showTotalPriceButton = '.css-n1d5pa > .chakra-button';
    }

    

    clickshoppingCartButton(){
        cy.get(this.shoppingCartButton).click();
    }
    clickshowTotalPriceButton(){
        cy.get(this.showTotalPriceButton).click();
    }
}