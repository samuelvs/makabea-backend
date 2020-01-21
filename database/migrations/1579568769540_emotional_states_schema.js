'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmotionalStateSchema extends Schema {
  up () {
    this.create('emotional_states', (table) => {
      table.increments()
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('humor').notNullable()
      table.integer('confident').notNullable()
      table.integer('energy').notNullable()
      table.timestamp('date').notNullable()
      table.timestamp('description').nullable()
      // table.integer('media_id')
      //   .unsigned()
      //   .references('id')
      //   .inTable('medias')
      //   .onUpdate('CASCADE')
      //   .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('emotional_states')
  }
}

module.exports = EmotionalStateSchema
