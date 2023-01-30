const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    recipeID:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Recipe'}
    ]
});

module.exports=mongoose.model('Favorite',FavoriteSchema);
