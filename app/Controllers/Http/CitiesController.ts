import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import City from 'App/Models/City'

export default class CitiesController {
  public async index ({}: HttpContextContract) {
    return City.query().preload('products')
  }

  public async store ({request, response}: HttpContextContract) {
    const payload = {
      name: request.input('name'),
    }

    const city = await City.create(payload)
    return response.status(201).send(city)
  }
}
