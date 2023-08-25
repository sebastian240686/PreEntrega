export class ProductsPage{

    constructor(){

        this.producto1 ="//p[text()='Black Jacket']//following-sibling::button[@id='blackJacket']";
        this.producto2 = "//p[text()='Beige Shorts']//following-sibling::button[@id='beigepants']" ;           
    }

    cargarProductos(itemA,itemB){

          cy.xpath(this.producto1).type(itemA);
          cy.get('#closeModal').click();
          cy.xpath(this.producto2).type(itemB);
          cy.get('#closeModal').click();
    }

}