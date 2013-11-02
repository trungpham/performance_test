define([
  'jquery',
  'backbone-all',
  'app/views/client'
], function($, Backbone, ClientView) {
  'use strict';
  
  var MainController = function() {};
  
  $.extend(MainController, {
    client: function() {
      var view = new ClientView();
      app.layout.main.show(view);
    }
  });
  
  return MainController;
});
