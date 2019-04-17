const form = require('./form/form.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(form);
};
