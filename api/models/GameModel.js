
const mongoose = require('mongoose'),
	MongooseSchema = mongoose.Schema;

const gameSchema = mongoose.Schema({
	name: {
		unique: true,
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	images: {
		type: Map,
		of: String,
		required: true
	},
	categories: [
		{
			type: MongooseSchema.Types.ObjectId,
			ref: 'CategoryModel',
			required: true
		}
	]
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;