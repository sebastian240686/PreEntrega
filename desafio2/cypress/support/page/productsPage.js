export class ProductsPage{

    constructor(){
        this.onlineButton = '#onlineshoplink';
        
    }
    clickOnlineButton(){
        cy.get(this.onlineButton).click();
    }
    choosingProduct(items){
        cy.get(`[value ='${items}']`).contains('button','Add to cart').click();
         cy.get('#closeModal').click();
     
       }
}