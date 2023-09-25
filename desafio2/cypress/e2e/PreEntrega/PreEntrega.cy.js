///<reference types = 'cypress' />

import { CheckOutPage } from "../../support/page/checkoutPage";
import  {LoginPage} from "../../support/page/loginpage";
import { ProductsPage } from "../../support/page/productsPage";
import { ShoppingCartPage } from "../../support/page/shoppingCartPage";

describe("PreEntrega",() => {
    const randomNumber = Math.floor(Math.random()*1000);
   
    let dato;
    let productos;
    const loginpage = new LoginPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    const checkoutPage = new CheckOutPage();
    
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
                username :`pushingit${randomNumber}`,
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
                'username' : `pushingit${randomNumber}`,
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
        



    })


})