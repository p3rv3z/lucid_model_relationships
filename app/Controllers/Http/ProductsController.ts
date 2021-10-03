import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ }: HttpContextContract) {
    return Product.query().preload('user')
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = {
      title: request.input('title'),
      price: request.input('price'),
      user_id: request.input('user_id'),
    }

    const product = await Product.create(payload)

    return response.status(201).send(product)
  }
}
