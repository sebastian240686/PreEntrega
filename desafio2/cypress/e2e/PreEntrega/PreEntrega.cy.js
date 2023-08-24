///<reference types = 'cypress' />

import { HomePage } from "../../support/page/homepage";
import  {LoginPage} from "../../support/page/loginpage";
import { ProductsPage } from "../../support/page/productsPage";

describe("PreEntrega",() => {
    let dato;
    let items;
    const loginpage = new LoginPage();
    const homepage = new HomePage();
    const productsPage = new ProductsPage();
    before("before",()=>{

     cy.fixture('datos').then(data =>{
        dato=data;
     })

     cy.fixture('productos').then(listaDeProductos =>{
        items=listaDeProductos;
     })
    })

    beforeEach("Ingreso de datos validos", () =>{

        cy.visit('');
        cy.get('#registertoggle').dblclick();
        loginpage.writeUser(dato.username);
        loginpage.writePassword(dato.password);
        loginpage.clickLoginButton();
        homepage.clickOnlineButton();
    })
    it("Actividad Pre Entrega", () =>{

     productsPage.cargarProductos('Black Jacket', 'White Pants');



    })
})