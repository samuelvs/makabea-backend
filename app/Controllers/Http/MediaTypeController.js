'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const MediaTypes = use('App/Models/MediaType');
/**
 * Resourceful controller for interacting with mediatypes
 */
class MediaTypeController {
  /**
   * Show a list of all mediatypes.
   * GET mediatypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const type = await MediaTypes.all();

    return type;
  }

  /**
   * Create/save a new midiatype.
   * POST mediatypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let data = request.only(["description"]);

    const type = await MediaTypes.create(data);

    return type;
  }

  /**
   * Display a single midiatype.
   * GET mediatypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request }) {
    const type = await MediaTypes.findOrFail(params.id);

    return type;
  }

  /**
   * Update midiatype details.
   * PUT or PATCH mediatypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const type = await MediaTypes.findOrFail(params.id);
    const data = request.only(["description"]);

    type.merge(data);
    await type.save();

    return type;
  }

  /**
   * Delete a midiatype with id.
   * DELETE mediatypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const type = await MediaTypes.findOrFail(params.id);
    await type.delete();

    return type;
  }
}

module.exports = MediaTypeController
