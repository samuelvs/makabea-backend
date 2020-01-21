'use strict'

/*
|--------------------------------------------------------------------------
| DangerSignalSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const DangerSignalModel = use('App/Models/DangerSignal')

class DangerSignalSeeder {
  async run () {
    await DangerSignalModel.create({
      id: 1,
      user_id: 1,
      order: 1,
      description: 'Lorem impsum.',
    })

    await DangerSignalModel.create({
      id: 2,
      user_id: 1,
      order: 2,
      description: 'Quelc dollor.',
    })
    
    await DangerSignalModel.create({
      id: 3,
      user_id: 2,
      order: 1,
      description: 'Os comentários que mamis faz sobre mim me afetam demais.',
    })

    await DangerSignalModel.create({
      id: 4,
      user_id: 2,
      order: 2,
      description: 'Não ver meus migos no fim de semana.',
    })

    await DangerSignalModel.create({
      id: 5,
      user_id: 2,
      order: 3,
      description: 'Ficar pensando na incerteza do meu futuro.',
    })
  }
}

module.exports = DangerSignalSeeder
