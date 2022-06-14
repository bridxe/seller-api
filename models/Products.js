const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Products = new Schema({
  sku: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  price: {
    type: mongoose.Decimal128,
    required: false
  },
  quantity: {
    type: Array,
    default: []
  },
  tax: {
    type: mongoose.Decimal128,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  picture: {
    type: Array,
    default: []
  },
  model: {
    type: Array,
    default: []
  },
  nft_contract_address: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Products', Products);