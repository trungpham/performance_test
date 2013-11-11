define([
  'backbone-all',
  'hbs!app/templates/layouts/main'
], function(Backbone, mainLayoutTemplate) {
  'use strict';

  return Backbone.Marionette.Layout.extend({
    template: mainLayoutTemplate,
    
    regions: {
      main: 'main'
    }
  });
});
