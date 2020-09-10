var mongoose = require('mongoose');

// User Schema
var userSchema = mongoose.Schema({
	acct:{
		type: String,
		required: true,
		unique: true
  },
  amount:{
    type: Float64Array,
    required: true,
    unique: false
  }
});

var Transaction = module.exports = mongoose.model('Transaction', userSchema);