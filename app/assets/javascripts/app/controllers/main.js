define([
  'jquery',
  'app/app',
  'backbone-all',
  'app/views/client',
  'app/views/placeholder1',
  'app/views/placeholder2',
  'app/views/placeholder3',
  'app/collections/widget'
], function($, app, Backbone, ClientView, PlaceHolder1View, PlaceHolder2View, PlaceHolder3View, WidgetCollection) {
  'use strict';

  var MainController = function() {};

  $.extend(MainController.prototype, {
    client: function() {
      var view,
          collection = new WidgetCollection(),
          startTime = document.location.search.replace('?', ''),
          endTime = (new Date()).getTime();

      collection.fetch({
        success: function() {
          view = new ClientView({ collection: collection });
          app.layout.main.show(view);
          $('body').prepend('<strong style="color: red;">LOAD TIME FROM <u>CLIENT</u>: ' + (endTime - startTime) + 'ms</strong>');
        }
      });
    },
    
    placeholder1: function() {
      var view = new PlaceHolder1View();
      app.layout.main.show(view);
    },
    
    placeholder2: function() {
      var view = new PlaceHolder2View();
      app.layout.main.show(view);
    },
    
    placeholder3: function() {
      var view = new PlaceHolder3View();
      app.layout.main.show(view);
    }
  });
  
  return MainController;
});
