const Category = require('../models/CategoryModel');

module.exports = {

    addCategory : (game, callBack) => {
        Category.create(game, callBack);
    },
    
    // to populate games attribute in this route
    findAllCategories : (games, callBack) => {
        Category.find(games, callBack);
    },
    
    // to populate games attribute in this route
    findCategoryById : (game, callBack) => {
        Category.find(game, callBack);
    },
    
    updateCategoryById : (payload, callback) => {
        const {Id, updatesPayload} = payload;
        Category.findOneAndUpdate({_id: Id}, updatesPayload, callback);
    },
    
    deleteCategoryById : (Id, callback) => {
        Category.findOneAndDelete({_id: Id}, callback);
    }
}