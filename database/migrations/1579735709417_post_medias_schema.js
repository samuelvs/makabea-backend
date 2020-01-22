'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostMediasSchema extends Schema {
  up () {
    this.create('post_medias', (table) => {
      table.increments()
      table.integer('post_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('posts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('media_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('medias')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('post_medias')
  }
}

module.exports = PostMediasSchema
