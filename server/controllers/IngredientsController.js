import { ingredientsService } from '../services/IngredientsService'
import BaseController from '../utils/BaseController'

export class IngredientsController extends BaseController {
  constructor() {
    super('api/ingredients')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const ingredients = await ingredientsService.find(req.query)
      return res.send(ingredients)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const ingredient = await ingredientsService.create(req.body)
      res.send(ingredient)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const ingredient = await ingredientsService.update(req.body)
      res.send(ingredient)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const ingredient = await ingredientsService.delete(req.params.id)
      res.send(ingredient)
    } catch (error) {
      next(error)
    }
  }
}
