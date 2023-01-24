const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    //fields here
})


module.exports = mongoose.model('Recipe',RecipeSchema)
