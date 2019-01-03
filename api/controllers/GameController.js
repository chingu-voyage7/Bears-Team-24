const mongoose = require('mongoose');
const Game = require('../models/GameModel');

module.exports = {

    addGame : (game, callBack) => {
        Game.create(game, callBack);
    },
    
    getAllGames : (games, callBack) => {
        Game.find(games, callBack);
    },
    
    getGameById : (game, callBack) => {
        Game.find(game, callBack);
    },
    
    updateGameById : (payload, callback) => {
        const {ID, updatesPayload} = payload;
        Game.findOneAndUpdate(ID, updatesPayload, callback);
    },
    
    deleteGameById : (Id, callback) => {
        Game.findOneAndDelete(Id, callback);
    }

    getByCategory : (category, callBack) => {
        Game.find(category, callBack);
    }
}