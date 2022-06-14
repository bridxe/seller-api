const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

mongoose = require('mongoose'),
  Insights = require('./models/Insights'),
  Products = require('./models/Products'),
  Purchases = require('./models/Purchasers'),
  Sales = require('./models/Sales'),
  Users = require('./models/Users'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var url = 'mongodb+srv://bridxe:zfhRmRQUasfgNFTV@bridxe-cms.9mcakb0.mongodb.net/BrideXe-CMS?retryWrites=true&w=majority';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
});




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var validator = require("express-joi-validation").createValidator({
  passError: true
});

require("./routes/routes.js")(app, validator);

app.use((err, req, res, next) => {
  console.log(err);
  if (err && err.error && err.error.isJoi) {
    console.log(err);

    let errDetail = [];
    if (err.error.details) {
      err.error.details.map(function (item) {
        var temp = {};
        temp[item.context.key] = item.message;
        errDetail.push(temp);
      });
    }
    res.status(400).json({
      Status: false,
      Data: errDetail,
      Message: "Model InValid"
    });
  } else {
    // pass on to another error handler
    res.status(500).json({
      Status: false,
      Data: err,
      Message: "Error Occured"
    });
  }
});

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('seller RESTful API server started on: ' + port);

/**
 * @api {get} /api/products/getProductbySku Get Product By Sku
 * @apiName Get Product By Sku
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} productSku  productSku `Mandatory`.
 * @apiGroup Products
 * @apSkuescription  Retrieve Products by Sku
*/


/**
 * @api {post} /api/product/postProduct Post Product
 * @apiName Post Product
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} name  name `Mandatory`.
 * @apiParam {Number} price  price `Mandatory`.
 * @apiParam {Object} quantity  quantity `Mandatory`.
 * @apiParam {Number} tax  tax `Mandatory`.
 * @apiParam {String} description  description `Mandatory`.
 * @apiParam {Object} picture  picture `Mandatory`.
 * @apiParam {Object} model  model `Mandatory`.
 * @apiParam {String} nft_contract_address  nft_contract_address `Mandatory`.
 * @apiGroup Products
 * @apSkuescription  Create Product (TO-DO: calculate product Skus?)
*/


/**
 * @api {get} /api/sales/getSalesbySku Get Sales By Sku
 * @apiName Get Sales By Sku
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} productSku  productSku `Mandatory`.
 * @apiGroup Sales
 * @apSkuescription  Retrieve Sales by Sku
*/

/**
 * @api {get} /api/sales/getSalesbyOwner Get Sales By Owner
 * @apiName Get Sales By Owner
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Sales
 * @apSkuescription  Retrieve Sales by Owner
*/

// TO-DO: function to aggregate Purchase(r)s table to Sales Table
// can be done automatically at every interval using CRON job?
// we should deal with this later

// should we change Purchasers to Purchases?

/**
 * @api {get} /api/purchases/getPurchasesByOrderId Get Purchasers By Order Id
 * @apiName Get Purchasers By Order Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Purchases
 * @apSkuescription  Retrieve Purchasers By Order Id
*/

/**
 * @api {get} /api/purchases/getPurchasesByUserId Get Purchasers By User Id
 * @apiName Get Purchasers By User Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Purchases
 * @apSkuescription  Retrieve Purchasers By User Id
*/

/**
 * @api {get} /api/purchases/getPurchasesByUserId Get Purchasers By User Id
 * @apiName Get Purchasers By User Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} userId  userId `Mandatory`.
 * @apiGroup Purchases
 * @apSkuescription  Retrieve Purchasers By User Id
*/

/**
 * @api {get} /api/insights/getInsightsById Get Insights By Id
 * @apiName Get Insights By Id
 * @apiHeader {String} Authorization Users unique access-key.
 * @apiParam {String} ownerId  ownerId `Mandatory`.
 * @apiGroup Insights
 * @apSkuescription  Retrieve Insights By Id
*/