define([
  'backbone',
  'app/app',
  'app/routers/main'
], function(Backbone, app, MainRouter) {
  'use strict';
  
  app.router = new MainRouter({ controller: new MainController() });
  app.start();
});