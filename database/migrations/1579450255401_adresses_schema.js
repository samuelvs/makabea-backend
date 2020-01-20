'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdressesSchema extends Schema {
  up () {
    this.create('adresses', (table) => {
      table.increments()
      table.decimal('lat').defaultTo(null)
      table.decimal('lng').defaultTo(null)
      table.timestamps()
    })
  }

  down () {
    this.drop('adresses')
  }
}

module.exports = AdressesSchema
