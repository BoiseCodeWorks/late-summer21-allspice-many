import { recipiesService } from '../services/RecipiesService'
import BaseController from '../utils/BaseController'

export class RecipiesController extends BaseController {
  constructor() {
    super('api/recipies')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .put('', this.edit)
      .delete('', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const recipies = await recipiesService.find(req.query)
      return res.send(recipies)
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
      const recipie = await recipiesService.update(req.body)
      res.send(recipie)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const recipie = await recipiesService.delete(req.body)
      res.send(recipie)
    } catch (error) {
      next(error)
    }
  }
}
