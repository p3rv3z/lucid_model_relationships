import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import User from './User'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public billing_address: string

  @column()
  public customerId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof User>

  @manyToMany(() => Product, {
    pivotTable: 'order_details',
    pivotColumns: ['quantity', 'unit_price'],
  })
  public products: ManyToMany<typeof Product>
}
