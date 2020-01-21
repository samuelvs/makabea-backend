'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

Route.get('/app', 'AppController.index').middleware(['auth']);

Route.group(() => {
    Route.get('/:id', 'UserController.show')
    Route.put('/:id', 'UserController.update')
    Route.delete('/:id', 'UserController.destroy')
}).prefix('/users').middleware(['auth']);

Route.group(() => {
    Route.get('/', 'AdressController.index')
    Route.post('/', 'AdressController.store')
    Route.get('/:id', 'AdressController.show')
    Route.put('/:id', 'AdressController.update')
    Route.delete('/:id', 'AdressController.destroy')
}).prefix('/address').middleware(['auth']);

Route.group(() => {
    Route.get('/', 'DangerSignalController.index')
    Route.post('/', 'DangerSignalController.store')
    Route.get('/:id', 'DangerSignalController.show')
    Route.put('/:id', 'DangerSignalController.update')
    Route.delete('/:id', 'DangerSignalController.destroy')
}).prefix('/danger-signal').middleware(['auth'])

Route.group(() => {
    Route.get('/', 'GratefulReasonController.index')
    Route.post('/', 'GratefulReasonController.store')
    Route.get('/:id', 'GratefulReasonController.show')
    Route.put('/:id', 'GratefulReasonController.update')
    Route.delete('/:id', 'GratefulReasonController.destroy')
}).prefix('/grateful-reason').middleware(['auth']);

Route.group(() => {
    Route.get('/', 'EmotionalStateController.index')
    Route.post('/', 'EmotionalStateController.store')
    Route.get('/:id', 'EmotionalStateController.show')
    Route.put('/:id', 'EmotionalStateController.update')
    Route.delete('/:id', 'EmotionalStateController.destroy')
}).prefix('/emotional-state').middleware(['auth']);