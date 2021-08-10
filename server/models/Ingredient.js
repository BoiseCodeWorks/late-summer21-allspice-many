import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Ingredient = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Ingredient
