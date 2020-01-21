'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const UserModel = use('App/Models/User')

class UserSeeder {
  async run () {
    await UserModel.create({
      id:1,      
      username: 'samuelveloso',
      email: 'samuelveloso42@gmail.com',
      password: '12345',
      nasc_dt: "1998-09-05",
    })

    await UserModel.create({
      id:2,
      username: 'katcroft',
      email: 'karensamylle@gmail.com',
      password: '12345',
      nasc_dt: "1998-09-05",
    })

    await UserModel.create({
      id:3,
      username: 'joao da silva',
      email: 'silva@gmail.com',
      password: '12345',
      nasc_dt: "1996-07-14",
    })
  }
}

module.exports = UserSeeder
