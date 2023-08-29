///<reference types = 'cypress' />


import  {LoginPage} from "../../support/page/loginpage";
import { ProductsPage } from "../../support/page/productsPage";
import { ShoppingCartPage } from "../../support/page/shoppingCartPage";

describe("PreEntrega",() => {
    let dato;
    let product;
    const loginpage = new LoginPage();
    const productsPage = new ProductsPage();
    const shoppingcartpage = new ShoppingCartPage();
    before("before",()=>{

     cy.fixture('datos').then(data =>{
        dato=data;
     })
     cy.fixture('productos').then(listaDeProductos =>{
        product=listaDeProductos;
     })
     
    })

    beforeEach("Ingreso de datos validos", () =>{

        cy.visit('');
        cy.get('#registertoggle').dblclick();
        loginpage.writeUser(dato.username);
        loginpage.writePassword(dato.password);
        loginpage.clickLoginButton();
        productsPage.clickOnlineButton();
    })
    it("Actividad Pre Entrega", () =>{

     productsPage.choosingProduct(product.item6);
     productsPage.choosingProduct(product.item2);
     shoppingcartpage.clickshoppingCartButton();
    shoppingcartpage.clickshowTotalPriceButton();
    shoppingcartpage.verificacionDeProductos(product.item6,product.itemPrice6);
    shoppingcartpage.verificacionDeProductos(product.item2,product.itemPrice2);
    shoppingcartpage.totalPrice(product.itemPrice2,product.itemPrice6);
   
  


    })
})