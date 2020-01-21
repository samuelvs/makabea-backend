'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const GratefulReason = use('App/Models/GratefulReason');

/**
 * Resourceful controller for interacting with gratefulreasons
 */
class GratefulReasonController {
    /**
   * Show a list of all gratefulreasons.
   * GET gratefulreasons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth }) {
    const user = await auth.getUser();
    
    const reason = await GratefulReason.query()
      .where('user_id', user.id).fetch();

    return reason;
  }

  /**
   * Create/save a new gratefulreason.  async index ({ request }) {

   * POST gratefulreasons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    let data = request.only(["description"]);
    const user = await auth.getUser();
    
    data.user_id = user.id;

    const reason = await GratefulReason.create(data);

    return reason;
  }

  /**
   * Display a single gratefulreason.
   * GET gratefulreasons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const reason = await GratefulReason.findOrFail(params.id);

    return reason;
  }

  /**
   * Update gratefulreason details.
   * PUT or PATCH gratefulreasons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const reason = await GratefulReason.findOrFail(params.id);
    const data = request.only(["description"]);
    
    reason.merge(data);
    await reason.save();
    
    return reason
  }

  /**
   * Delete a gratefulreason with id.
   * DELETE gratefulreasons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const reason = await GratefulReason.findOrFail(params.id);
    await reason.delete();

    return reason;
  }    
}

module.exports = GratefulReasonController
