const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Sales = new Schema({
  sku: {
    type: String,
    required: false
  },
  ownerid: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  sales: {
    type: Number,
    required: true,
    validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
    }
  },
  revenue: {
    type: mongoose.Decimal128,
    required: false
  }
});

module.exports = mongoose.model('Sales', Sales);