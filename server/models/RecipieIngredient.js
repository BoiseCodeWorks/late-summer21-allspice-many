import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// TODO[epic=Many-to-Many with object]
const RecipieIngredient = new Schema(
  {
    recipieId: { type: ObjectId, ref: 'Recipie' },
    ingredientId: { type: ObjectId, ref: 'Ingredient' },
    quantity: { type: Number, default: 1 },
    unit: { type: String, default: 'g' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

RecipieIngredient.virtual('ingredient', {
  ref: 'Ingredient',
  localField: 'ingredientId',
  foreignField: '_id',
  justOne: true
})

RecipieIngredient.virtual('recipie', {
  ref: 'Recipie',
  localField: 'recipieId',
  foreignField: '_id',
  justOne: true
})
