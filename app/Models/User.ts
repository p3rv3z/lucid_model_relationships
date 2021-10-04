import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'
import Product from './Product'
import Order from './Order'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @hasMany(() => Order, {
    foreignKey: 'customerId',
  })
  public orders: HasMany<typeof Order>
}
