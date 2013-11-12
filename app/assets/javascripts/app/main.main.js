define([
  'app/app',
  'backbone-all',
  'app/routers/main',
  'app/controllers/main'
], function(app, Backbone, MainRouter, MainController) {
  'use strict';
  
  app.Router = new MainRouter({ controller: new MainController() });
  app.start();
});