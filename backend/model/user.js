
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

const User = module.exports = mongoose.model('User', userSchema);

module.exports.addUser = (user, callBack) => {
	User.create(user, callBack);
}

module.exports.findUsers = (users, callBack) => {
	User.find(users, callBack);
}

module.exports.findUserById = (user, callBack) => {
	User.find(user, callBack);
}

module.exports.updateUserById = (payload, callback) => {
	const {Id, updatesPayload} = payload;
	User.findOneAndUpdate(Id, updatesPayload, callback);
}

module.exports.deleteUserById = (Id, callback) => {
	User.findOneAndDelete(Id, callback);
}
