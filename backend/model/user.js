
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
		required: true
	}
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.addUser = (user, callBack) => {
	User.create(user, callBack);
}

module.exports.findUsers = (users, callBack) => {
	User.find(users, callBack);
}

module.exports.findUserByID = (user, callBack) => {
	User.find(user, callBack);
}
