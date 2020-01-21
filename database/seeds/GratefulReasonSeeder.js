'use strict'

/*
|--------------------------------------------------------------------------
| GratefulReasonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const GratefulReasonModel = use('App/Models/GratefulReason')

class GratefulReasonSeeder {
  async run() {
    await GratefulReasonModel.create({
      id: 1,
      user_id: 1,
      description: 'Filmes bons.',
    })

    await GratefulReasonModel.create({
      id: 2,
      user_id: 2,
      description: 'Meus dogineos',
    })

    await GratefulReasonModel.create({
      id: 3,
      user_id: 2,
      description: 'Minha best Natasha.',
    })
  }
}

module.exports = GratefulReasonSeeder
