import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index ({}: HttpContextContract) {
    return User.query().preload('profile').preload('products')
  }

  public async store ({request, response}: HttpContextContract) {
    const payload = {
      name: request.input('name'),
      email: request.input('email')
    }

    const user = await User.create(payload)

    return response.status(201).send(user)
  }
}
