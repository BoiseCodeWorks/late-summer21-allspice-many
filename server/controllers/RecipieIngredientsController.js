import { recipieIngredientsService } from '../services/RecipieIngredientsService'
import BaseController from '../utils/BaseController'

export class RecipieIngredientsController extends BaseController {
  constructor() {
    super('api/recipieIngredients')
    this.router
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async create(req, res, next) {
    try {
      const recipieIngredient = await recipieIngredientsService.create(req.body)
      res.send(recipieIngredient)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const recipieIngredient = await recipieIngredientsService.update(req.body)
      res.send(recipieIngredient)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const recipieIngredient = await recipieIngredientsService.delete(req.params.id)
      res.send(recipieIngredient)
    } catch (error) {
      next(error)
    }
  }
}
