'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.date('nasc_dt').notNullable()
      // table.integer('addres_id')
      //   .unsigned()
      //   .notNullable()
      //   .references('id')
      //   .inTable('addresses')
      //   .onUpdate('CASCADE')
      //   .onDelete('CASXASW')
      table.string('app_password')
      table.integer('day_send_report').defaultTo(null)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
