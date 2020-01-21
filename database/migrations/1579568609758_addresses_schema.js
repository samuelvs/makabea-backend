'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdressesSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.decimal('lat').nullable()
      table.decimal('lng').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AdressesSchema
