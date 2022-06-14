const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Users = new Schema({
  userid: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  wallet: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Users', Users);