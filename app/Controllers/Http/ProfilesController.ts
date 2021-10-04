import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'

export default class ProfilesController {
  public async index({ }: HttpContextContract) {
    return Profile.query().preload('user')
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = {
      date_of_birth: request.input('date_of_birth'),
      address: request.input('address'),
      user_id: request.input('user_id'),
    }

    const profile = await Profile.create(payload)

    return response.status(201).send(profile)
  }
}
