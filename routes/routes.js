let insightsController = require("../controllers/insightsController.js")
let productsController = require("../controllers/productsController.js")
let purchasesController = require("../controllers/purchasesController.js")
let salesController = require("../controllers/salesController.js")
let usersController = require("../controllers/usersController.js");


module.exports = function (app, validate) {
    /*Account Route Start */
    //insightsController
    app.get(
        "/api/insights/getInsightsById", validate.body(authModel.signUp),
        insightsController.getInsightsById
    );

    //productsController
    app.get(
        "/api/products/getProductbySku", validate.body(authModel.logIn),
        productsController.getProductBySku
    );

    app.post(
        "/api/products/postProduct", validate.body(authModel.logIn),
        productsController.postProduct
    );

    // purchasesController
    app.get(
        "/api/purchases/getPurchasesByUserId", validate.body(authModel.logIn),
        purchasesController.getPurchasesByOrderId
    );

    app.get(
        "/api/purchases/getPurchasesByUserId", validate.body(authModel.logIn),
        purchasesController.getPurchasesByUserId
    );

    // salesController
    app.get(
        "/api/sales/getSalesbyOwner", validate.body(authModel.logIn),
        salesController.getSalesByOwner
    );

    app.get(
        "/api/sales/getSalesbySku", validate.body(authModel.logIn),
        salesController.getSalesBySku
    );

    // usersController
    app.get(
        "/api/users/getUsersById", validate.body(authModel.logIn),
        usersController.getUserById
    );
}