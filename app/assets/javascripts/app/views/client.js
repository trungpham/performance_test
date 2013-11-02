define([
  'jquery',
  'handlebars',
  'backbone-all',
  'hbs!app/templates/client'
], function($, Backbone, clientTemplate) {
  'use strict';
  
  return Backbone.Marionette.ItemView.extend({
    template: Handlebars.compile(clientTemplate)
  });
});
