import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RecipieIngredientsService {
  async find(query = {}) {
    return await dbContext.RecipieIngredients.find(query)
      .populate('recipie')
      .populate('ingredient')
  }

  async create(body) {
    return await dbContext.RecipieIngredients.create(body)
  }

  async update(body) {
    const updated = await dbContext.RecipieIngredients.findByIdAndUpdate(body.id, body, { new: true })
    if (!updated) {
      throw new BadRequest('RecipieIngredients not found')
    }
    return updated
  }

  async delete(body) {
    return await dbContext.RecipieIngredients.findByIdAndRemove(body.id)
  }
}

export const recipiesIngredientsService = new RecipieIngredientsService()
