import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Order from "App/Models/Order"
import Product from 'App/Models/Product'

export default class OrdersController {
  public async index({ }: HttpContextContract) {
    return Order.query().preload('customer').preload('products')
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = {
      billing_address: request.input('billing_address'),
      customer_id: request.input('customer_id')
    }

    const products = await Product.query().limit(2)
    const order = await Order.create(payload)

    products.forEach(product => {
      order.related('products').attach({
        [product.id]: {
          quantity: 2,
          unit_price: product.price
        }
      })
    });


    return response.status(201).send(order)
  }
}
