'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GratefulReasonsSchema extends Schema {
  up () {
    this.create('grateful_reasons', (table) => {
      table.increments()
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('grateful_reasons')
  }
}

module.exports = GratefulReasonsSchema
