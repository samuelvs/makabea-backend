'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const EmotionalState = use('App/Models/EmotionalState');
/**
 * Resourceful controller for interacting with emotionalstates
 */
class EmotionalStateController {
  /**
   * Show a list of all emotionalstates.
   * GET emotionalstates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth }) {
    const user = await auth.getUser();

    const emotional = await EmotionalState.query()
      .where('user_id', user.id)
      .fetch()

    return emotional;
  }

  /**
   * Create/save a new emotionalstate.
   * POST emotionalstates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    let data = request.only(["humor", "confident", "energy", "date", "description"]);
    const user = await auth.getUser();
    
    data.user_id = user.id;

    const emotional = await EmotionalState.create(data);

    return emotional;
  }

  /**
   * Display a single emotionalstate.
   * GET emotionalstates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const emotional = await EmotionalState.findOrFail(params.id)

    return emotional;
  }

  /**
   * Update emotionalstate details.
   * PUT or PATCH emotionalstates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const emotional = await EmotionalState.findOrFail(params.id);
    const data = request.only(["humor", "confident", "energy", "date", "description"]);

    emotional.merge(data);
    await emotional.save();

    return emotional;

  }

  /**
   * Delete a emotionalstate with id.
   * DELETE emotionalstates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const emotional = await EmotionalState.findOrFail(params.id);
    await emotional.delete();

    return emotional;
  }
}

module.exports = EmotionalStateController
