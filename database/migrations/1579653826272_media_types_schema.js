'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MediaTypesSchema extends Schema {
  up () {
    this.create('media_types', (table) => {
      table.increments()
        table.string('description', 30).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('media_types')
  }
}

module.exports = MediaTypesSchema
