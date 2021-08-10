import mongoose from 'mongoose'
import Ingredient from '../models/Ingredient'
import Recipie from '../models/Recipie'
import RecipieIngredient from '../models/RecipieIngredient'
import ValueSchema from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Ingredients = mongoose.model('Ingredient', Ingredient)
  Recipies = mongoose.model('Recipie', Recipie)
  RecipieIngredients = mongoose.model('RecipieIngredient', RecipieIngredient)
}

export const dbContext = new DbContext()
