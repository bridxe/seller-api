let insightsController = require("../controllers/insightsController.js")
let productsController = require("../controllers/productsController.js")
let purchasesController = require("../controllers/purchasesController.js")
let salesController = require("../controllers/salesController.js")
let usersController = require("../controllers/usersController.js")
let insightsValidator = require("../validators/insightsValidator.js")
let productsValidator = require("../validators/productsValidator.js")
let purchasesValidator = require("../validators/purchasesValidator.js")
let salesValidator = require("../validators/salesValidator.js")
let usersValidator = require("../validators/usersValidator.js")


module.exports = function (app, validate) {
    /*Account Route Start */
    //insightsController
    app.get(
        "/api/insights/getInsightsById", validate.query(insightsValidator.getInsightsById),
        insightsController.getInsightsById
    );

    //productsController
    app.get(
        "/api/products/getProductbySku", validate.query(productsValidator.getProductBySku),
        productsController.getProductBySku
    );
  
    app.post(
        "/api/products/postProduct", validate.body(productsValidator.postProduct),
        productsController.postProduct
    );

    // purchasesController
    app.get(
        "/api/purchases/getPurchasesByOrderId", validate.query(purchasesValidator.getPurchasesByOrderId),
        purchasesController.getPurchasesByOrderId
    );

    app.get(
        "/api/purchases/getPurchasesByUserId", validate.query(purchasesValidator.getPurchasesByUserId),
        purchasesController.getPurchasesByUserId
    );

    // salesController
    app.get(
        "/api/sales/getSalesbyOwner", validate.query(salesValidator.getSalesByOwner),
        salesController.getSalesByOwner
    );

    app.get(
        "/api/sales/getSalesbySku", validate.query(salesValidator.getSalesBySku),
        salesController.getSalesBySku
    );

    // usersController
    app.get(
        "/api/users/getUsersById", validate.query(usersValidator.getUserById),
        usersController.getUserById
    );
}