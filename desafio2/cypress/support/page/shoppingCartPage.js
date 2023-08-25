export class ShoppingCartPage{

      
    constructor(){

      this.productAndPrice1 ='//p[text() = "Black Jacket"]//following-sibling::p[text() ="25"]';
      this.productAndPrice2 ='//p[text() = "Beige Shorts"]//following-sibling::p[text() ="19"]';
    }

    VerificarProductosYPrecio(){

        cy.xpath(this.productAndPrice1).should('exist');
        cy.xpath(this.productAndPrice2).should('exist');
        
    }

}