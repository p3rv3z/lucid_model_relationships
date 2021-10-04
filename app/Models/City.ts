import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, HasManyThrough, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import User from './User'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public users: HasMany<typeof User>

  @hasManyThrough([
    () => Product,
    () => User,
  ])
  public products: HasManyThrough<typeof Product>
}
