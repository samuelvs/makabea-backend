'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MediaSchema extends Schema {
  up () {
    this.create('media', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('media')
  }
}

module.exports = MediaSchema
