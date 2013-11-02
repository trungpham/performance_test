define([
  'backbone',
  'app/views/layouts/main'
], function(Backbone) {
  'use strict';
  
  var app = new Backbone.Marionette.Application(),
      layout = new MainLayout();
  
  app.addRegions({
    body: 'body'
  });
  
  app.addInitializer(function(options) {
    app.body.show(layout);
    app.layout = layout;
  });
  
  return app;
});