
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String
	},
	role: {
		type: String,
		required: true,
		enum: ['Client', 'Vendor', 'Admin']
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;