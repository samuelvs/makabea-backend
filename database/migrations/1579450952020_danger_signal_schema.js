'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DangerSignalSchema extends Schema {
  up () {
    this.create('danger_signals', (table) => {
      table.increments()
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description').notNullable()
      table.integer('order').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('danger_signals')
  }
}

module.exports = DangerSignalSchema
