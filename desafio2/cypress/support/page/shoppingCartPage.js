export class ShoppingCartPage{

      
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

    VerificarProductosYPrecio(){

        cy.xpath(this.productAndPrice1).should('exist');
        cy.xpath(this.productAndPrice2).should('exist');
        
    }

}