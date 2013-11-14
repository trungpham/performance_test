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
    },

    render: function() {
      var startTime = document.location.search.replace('?', ''),
         endTime = (new Date()).getTime();

      Backbone.Marionette.ItemView.prototype.render.apply(this, arguments);

      $('body').prepend('<strong style="color: red;">LOAD TIME FROM <u>CLIENT</u>: ' + (endTime - startTime) + 'ms</strong>');
    }
  });
});
