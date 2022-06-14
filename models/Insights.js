const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Insights = new Schema({
  sku: {
    type: String,
    required: false
  },
  sales_history: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Insights', Insights);