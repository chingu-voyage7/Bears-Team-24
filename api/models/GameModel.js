
const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
	name: {
		unique: true,
		type: string,
		required: true
	},
	description: {
		type: string,
		required: true
	},
	images: {
		type: Map,
		of: String
		required: true;
	},
	categories: {
		type: [String],
		required: true
	}
});

module.exports = mongoose.Model('Game', gameSchema);