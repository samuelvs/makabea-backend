'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Media = use('App/Models/Media');
/**
 * Resourceful controller for interacting with media
 */
class MediaController {
  /**
   * Show a list of all media.
   * GET media
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const media = await Media.all();

    return media;
  }

  /**
   * Create/save a new media.
   * POST media
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    let data = request.only(["path", "type_id"]);

    const media = await Media.create(data);

    return media;
  }

  /**
   * Display a single media.
   * GET media/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const media = await Media.findOrFail(params.id);

    return media;
  }

  /**
   * Update media details.
   * PUT or PATCH media/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const media = await Media.findOrFail(params.id);
    const data = request.only(["path", "type_id"]);

    media.merge(data);
    await media.save();

    return media;
  }

  /**
   * Delete a media with id.
   * DELETE media/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const media = await Media.findOrFail(params.id);
    await media.delete();

    return media;
  }
}

module.exports = MediaController
