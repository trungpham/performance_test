define([
  'backbone-all',
  'app/views/layouts/main'
], function(Backbone, MainLayout) {
  'use strict';
  
  var app = new Backbone.Marionette.Application(),
      layout = new MainLayout();

  app.addRegions({
    main: 'body'
  });
  
  app.addInitializer(function(options) {
    app.main.show(layout);
    app.layout = layout;
  });

  app.on('initialize:after', function() {
    Backbone.history.start({ pushState: true });
  });
  
  return app;
});