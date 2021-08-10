import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RecipiesService {
  async find(query = {}) {
    const recipies = await dbContext.Recipies.find(query).populate('ingredients')
    return recipies
  }

  async findById(id) {
    const recipies = await dbContext.Recipies.findById(id)
    if (!recipies) {
      throw new BadRequest('Recipie not found')
    }
    return recipies
  }

  async create(body) {
    return await dbContext.Recipies.create(body)
  }

  async update(body) {
    const updated = await dbContext.Recipies.findByIdAndUpdate(body.id, body, { new: true })
    if (!updated) {
      throw new BadRequest('Recipie not found')
    }
    return updated
  }

  async delete(body) {
    return await dbContext.Recipies.findByIdAndRemove(body.id)
  }
}

export const recipiesService = new RecipiesService()
