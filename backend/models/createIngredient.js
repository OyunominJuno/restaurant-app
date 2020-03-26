const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    forDish: String  
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);//create the Model
module.exports = Ingredient;