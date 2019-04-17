// Initializes the `form` service on path `/form`
const createService = require('feathers-mongoose');
const createModel = require('../../models/form.model');
const hooks = require('./form.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/form', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('form');

  service.hooks(hooks);
};
