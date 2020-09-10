var mongoose = require('mongoose');

// User Schema
var userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		unique: true
	},
	acct:{
		type: String,
		required: true,
		unique: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	image_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', userSchema);