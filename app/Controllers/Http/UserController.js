'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const User = user('App/Models/User');
/**
 * Resourceful controller for interacting with users
 */
class UserController {

/**
 * Display a single user.
 * GET users/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 * @param {View} ctx.view
 */
async show ({ params }) {
    const user = await User.findOrFail(params.id);

    return user;
}

/**
 * Update user details.
 * PUT or PATCH users/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
async update ({ params, request }) {
    const user = await user.findOrFail(params.id)
    const data = request.only([
      'username',
      'nasc_dt',
      'app_password',
      'day_send_report'
    ])

    await user.merge({ ...data })
    await user.save()

    return user
}

/**
 * Delete a user with id.
 * DELETE users/:id
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
async destroy ({ params, auth }) {
    const user = await User.findOrFail(params.id);

    if (user.id != auth.user_id){
        return Response.status(401);
    }

    await user.delete();

    return user;
}
}

module.exports = UserController
