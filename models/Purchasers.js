const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Purchasers = new Schema({
  orderid: {
    type: String,
    required: false
  },
  userid: {
    type: String,
    required: false
  },
  sku_list: {
    type: Array,
    default: []
  },
  paid: {
    type: mongoose.Decimal128,
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  status: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Purchasers', Purchasers);