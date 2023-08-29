///<reference types = 'cypress' />

import { HomePage } from "../../support/page/homepage";
import  {LoginPage} from "../../support/page/loginpage";
import { ProductsPage } from "../../support/page/productsPage";
import { ShoppingCartPage } from "../../support/page/shoppingCartPage";

describe("PreEntrega",() => {
    let dato;
    let product;
    const loginpage = new LoginPage();
    const homepage = new HomePage();
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

     productsPage.cargarProductos('Black Jacket','Beige Shorts');
     homepage.clickshoppingCartButton();
     homepage.clickshowTotalPriceButton();
    shoppingcartpage.VerificarProductosYPrecio();


    })
})