import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderDetails extends BaseSchema {
  protected tableName = 'order_details'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('quantity')
      table.float('unit_price')
      table.integer('order_id').unsigned().nullable()
      table.integer('product_id').unsigned().nullable()

      table
        .foreign('order_id')
        .references('orders.id')
        .onUpdate('cascade')
        .onDelete('set null')

      table
        .foreign('product_id')
        .references('products.id')
        .onUpdate('cascade')
        .onDelete('set null')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
