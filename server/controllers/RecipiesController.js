import { recipiesIngredientsService } from '../services/RecipeIngredientsService'
import { recipiesService } from '../services/RecipiesService'
import BaseController from '../utils/BaseController'

export class RecipiesController extends BaseController {
  constructor() {
    super('api/recipies')
    this.router
      .get('', this.getAll)
      .get('/:id/ingredients', this.getRecipieIngredients)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const recipies = await recipiesService.find(req.query)
      return res.send(recipies)
    } catch (error) {
      next(error)
    }
  }

  async getRecipieIngredients(req, res, next) {
    try {
      const ingredients = await recipiesIngredientsService.find({ recipieId: req.params.id })
      return res.send(ingredients)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const recipie = await recipiesService.create(req.body)
      res.send(recipie)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const recipie = await recipiesService.update(req.body)
      res.send(recipie)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const recipie = await recipiesService.delete(req.params.id)
      res.send(recipie)
    } catch (error) {
      next(error)
    }
  }
}
