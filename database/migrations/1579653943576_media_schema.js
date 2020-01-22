'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MediaSchema extends Schema {
  up () {
    this.create('media', (table) => {
      table.increments()
        table.string('path').nullable()
        table.integer('type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('media_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('media')
  }
}

module.exports = MediaSchema
