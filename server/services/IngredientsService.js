import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class IngredientsService {
  async find(query = {}) {
    const ingredients = await dbContext.Ingredients.find(query)
    return ingredients
  }

  async findById(id) {
    const ingredients = await dbContext.Ingredients.findById(id)
    if (!ingredients) {
      throw new BadRequest('Ingredient not found')
    }
    return ingredients
  }

  async create(body) {
    return await dbContext.Ingredients.create(body)
  }

  async update(body) {
    const updated = await dbContext.Ingredients.findByIdAndUpdate(body.id, body, { new: true })
    if (!updated) {
      throw new BadRequest('Ingredient not found')
    }
    return updated
  }

  async delete(id) {
    await dbContext.Ingredients.findByIdAndRemove(id)
    // TODO[epic=many-to-many array style]
    await dbContext.Recipies.updateMany({ ingredients: id }, { $pull: { ingredients: id } })
  }
}

export const ingredientsService = new IngredientsService()
