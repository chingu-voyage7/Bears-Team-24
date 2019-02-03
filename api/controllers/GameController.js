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
        const {Id, updatesPayload} = payload;
        Game.findOneAndUpdate({_id: Id}, updatesPayload, callback);
    },
    
    deleteGameById : (Id, callback) => {
        Game.findOneAndDelete({_id: Id}, callback);
    }
}