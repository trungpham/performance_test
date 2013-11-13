define([
  'jquery',
  'backbone-all',
  'app/collections/widget',
  'hbs!app/templates/client'
], function($, Backbone, WidgetCollection, clientTemplate) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: clientTemplate,

    serializeData: function() {
      return {
        widgets: this.collection.toJSON()
      }
    }
  });
});
