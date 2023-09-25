export class CheckOutPage{

    constructor(){
        this.checkout = "//button[text() = 'Go to Checkout']";

    }

    clickCheckout(){
        cy.xpath("//button[text() = 'Go to Checkout']").click();
    }
    ingresarNombre(name){
        cy.get('#FirstName').type(name);
    }

    ingresarApellido(apellido){
        cy.get('#lastName').type(apellido);
    }

    ingresarTarjetaDeCredito(numeroDeTarjeta){
        cy.get('#cardNumber').type(numeroDeTarjeta);
    }

    aceptarLaCompra(){
        cy.xpath("//button[text() = 'Purchase']").click();
    }
}