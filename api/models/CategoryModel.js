
const mongoose = require('mongoose'),
    MongooseSchema = mongoose.Schema;

const categorySchema = mongoose.Schema({
	name: {
		unique: true,
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	games: [
		{
			type: MongooseSchema.Types.ObjectId,
			ref: 'GameModel',
		}
	]
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;