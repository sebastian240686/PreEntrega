///<reference types = 'cypress' />

import { CheckOutPage } from "../../support/page/checkoutPage";
import  {LoginPage} from "../../support/page/loginpage";
import { ProductsPage } from "../../support/page/productsPage";
import { ShoppingCartPage } from "../../support/page/shoppingCartPage";
import { ReciptPage } from "../../support/page/reciptPage";

describe("PreEntrega",() => {
    const randomUser ='sebastian'+ Math.floor(Math.random()*1000);
   
    let dato;
    let productos;
    const loginpage = new LoginPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    const checkoutPage = new CheckOutPage();
    const reciptPage = new ReciptPage();
    
    before ('iniciando', () => {
        cy.fixture('datos').then(listaDeDatos =>{
            dato=listaDeDatos;
        })
        cy.fixture('productos').then(listaDeProductos => {
            productos = listaDeProductos;
        })        
        
    })

    beforeEach('',() =>{
        cy.request({
            url: "https://pushing-it.onrender.com/api/register",
            method: "POST",
            body:{
                username :randomUser,
                password : '123456!',
                gender : "Male",
                day : "24",
                month : "June",
                year :"1986",
            }
        }).then(answer =>{
            
            expect(answer.status).to.be.equal(200);
           
    
        })
    
        cy.request ({
            url: "https://pushing-it.onrender.com/api/login",
            method: 'POST',
            body : {
                'username' : randomUser,
                'password' : '123456!'
            }
        }).then(answerLogin =>{
          
           
            window.localStorage.setItem('token',answerLogin.body.token);
            window.localStorage.setItem('user',answerLogin.body.user);
            cy.visit('');
            productsPage.clickOnlineButton();
                   })
    })

    it('Realizar compra',() => {        
        productsPage.choosingProduct(productos.item2);
        productsPage.choosingProduct(productos.item6);
        shoppingCartPage.clickshoppingCartButton();
        shoppingCartPage.clickshowTotalPriceButton();
        shoppingCartPage.verificacionDeProductos(productos.item2,productos.itemPrice2);
        shoppingCartPage.verificacionDeProductos(productos.item6,productos.itemPrice6);
        shoppingCartPage.totalPrice('50');
        checkoutPage.clickCheckout();
        checkoutPage.ingresarNombre(dato.name);
        checkoutPage.ingresarApellido(dato.lastName);
        checkoutPage.ingresarTarjetaDeCredito(dato.creditCardNumber);
        checkoutPage.aceptarLaCompra();
        reciptPage.VerificacionDeNombre().should('have.text','sebastian leguisamo has succesfully purchased the following items');
        reciptPage.verificarProducto(productos.item2);
        reciptPage.verificarProducto(productos.item6);
        reciptPage.verificacionDeTexto();
        reciptPage.verificacionDeTarjetaDeCredito(dato.creditCardNumber);
        reciptPage.verificarTotalPrice('50');
        reciptPage.clickBotonDelTicket();
        
       


    })
    after ('Eliminar usuario',()=>{
        cy.request({
            url: `https://pushing-it.onrender.com/api/deleteuser/${randomUser}`,
            method: "DELETE",

        }).then(answer =>{
                expect(answer.status).to.be.equal(200);
    })

    })


})