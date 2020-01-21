'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const DangerSignal = use('App/Models/DangerSignal');
/**
 * Resourceful controller for interacting with dangersignals
 */
class DangerSignalController {
  /**
   * Show a list of all dangersignals.
   * GET dangersignals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth }) {
    const user = await auth.getUser();
    
    const dangerSignals = await DangerSignal.query()
      .where('user_id', user.id).fetch();

    return dangerSignals;
  }

  /**
   * Create/save a new dangersignal.  async index ({ request }) {

   * POST dangersignals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    let data = request.only(["description", "order"]);
    const user = await auth.getUser();
    
    data.user_id = user.id;

    const signal = await DangerSignal.create(data);

    return signal;
  }

  /**
   * Display a single dangersignal.
   * GET dangersignals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const dangerSignal = await DangerSignal.findOrFail(params.id);

    return dangerSignal;
  }

  /**
   * Update dangersignal details.
   * PUT or PATCH dangersignals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const signal = await DangerSignal.findOrFail(params.id);
    const data = request.only(["description"]);
    
    signal.merge(data);
    await signal.save();
    
    return signal
  }

  /**
   * Delete a dangersignal with id.
   * DELETE dangersignals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const signal = await DangerSignal.findOrFail(params.id);
    await signal.delete();

    return signal;
  }
}

module.exports = DangerSignalController
