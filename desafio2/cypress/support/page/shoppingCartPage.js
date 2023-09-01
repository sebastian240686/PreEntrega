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

    verificacionDeProductos(item,itemPrice){
      cy.get(`[name ='${item}']`).should('exist');
     cy.get(`[name ='${itemPrice}']`).should('exist');
    }

  totalPrice(total){
    
    cy.get('#price').should('have.text',total);
  

  }
}
