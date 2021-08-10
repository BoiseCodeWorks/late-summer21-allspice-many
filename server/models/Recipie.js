import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Recipie = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
    // TODO[epic=many-to-many array style]
    // ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Recipie
