export class ReciptPage{

    constructor(){
        this.botonThankYou = '//button[text() = "Thank you"]';
        this.cliente= '#name';
        this.textoT_Credito = '//p[text() = "The credit card used was"]';
       
    }

    VerificacionDeNombre() {
        return cy.get(this.cliente);
    }

    verificarProducto(item) {
      cy.get(`[id='${item}']`).should('exist');
        
    }
    verificacionDeTexto(){
        cy.xpath(this.textoT_Credito).should('exist');
    }

     verificacionDeTarjetaDeCredito(tarjetaCredito){
        cy.get('#creditCard').should('have.text',tarjetaCredito);
    
   }

   verificarTotalPrice(price){
    const textoPrecioTotal = "You have spent $";
    cy.get('#totalPrice').should('have.text',textoPrecioTotal + price);

    

   }
   clickBotonDelTicket(){
    cy.xpath(this.botonThankYou).click();
   }
   
   

    

    
    
}