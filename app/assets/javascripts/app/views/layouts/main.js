define([
  'backbone-all',
  'handlebars',
  'hbs!app/templates/layouts/main'
], function(Backbone, mainLayoutTemplate) {
  'use strict';
  
  return Backbone.Marionette.Layout.extend({
    template: Handlebars.compile(mainLayoutTemplate),
    
    regions: {
      main: 'main'
    }
  });
});
