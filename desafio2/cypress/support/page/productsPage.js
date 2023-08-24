export class ProductsPage{

        constructor(){

            this.producto1 = "//p[text()='Black Jacket']/following-sibling::button[text()='Add to cart']";
            this.producto2 = "//p[text()='White Pants']/following-sibling::button[text()='Add to cart']"            
        }

        cargarProductos(product1,product2){
                cy.xpath(this.producto1).type(product1);
                
                cy.xpath(this.producto2).type(product2);

        }

}