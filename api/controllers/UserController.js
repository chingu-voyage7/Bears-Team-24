const User = require('../models/UserModel');

module.exports = {

    addUser : (user, callBack) => {
        User.create(user, callBack);
    },
    
    findUsers : (users, callBack) => {
        User.find(users, callBack);
    },
    
    findUserById : (user, callBack) => {
        User.find(user, callBack);
    },
    
    updateUserById : (payload, callback) => {
        const {Id, updatesPayload} = payload;
        User.findOneAndUpdate(Id, updatesPayload, callback);
    },
    
    deleteUserById : (Id, callback) => {
        User.findOneAndDelete(Id, callback);
    }
    
}