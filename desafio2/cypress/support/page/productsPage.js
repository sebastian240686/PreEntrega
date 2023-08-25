///<reference types = 'cypress' />
export class ProductsPage{

        constructor(){

            this.producto1 = '#blackJacket';
            this.producto2 = '#beigepants' ;           
        }

        cargarProductos(){

              cy.get(this.producto1).type('Black Jacket');
              cy.get('#closeModal').click();
              cy.get(this.producto2).type('Beige Shorts');
              cy.get('#closeModal').click();
        }

}