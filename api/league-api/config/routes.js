/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /champions': 'ChampionController.find',
  'GET /champions/:id': 'ChampionController.findOne',
  'PUT /champions/:id': 'ChampionController.update',

  'GET /passifs': 'PassifController.find',
  'GET /passifs/:id': 'PassifController.findOne',
};
