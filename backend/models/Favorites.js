const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    userID:String,
    recipeID:String
});

module.exports=mongoose.model('Favorite',FavoriteSchema);
