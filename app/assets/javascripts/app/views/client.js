define([
  'jquery',
  'backbone-all',
  'hbs!app/templates/client'
], function($, Backbone, clientTemplate) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: clientTemplate
  });
});
