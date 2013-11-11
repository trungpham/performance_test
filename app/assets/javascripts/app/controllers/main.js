define([
  'jquery',
  'app/app',
  'backbone-all',
  'app/views/client',
  'app/views/placeholder1',
  'app/views/placeholder2',
  'app/views/placeholder3'
], function($, app, Backbone, ClientView, PlaceHolder1View, PlaceHolder2View, PlaceHolder3View) {
  'use strict';

  var MainController = function() {};

  $.extend(MainController.prototype, {
    client: function() {
      var view = new ClientView(),
          startTime = document.location.search.replace('?', ''),
          endTime = (new Date()).getTime();

      app.layout.main.show(view);
      
      $('body').prepend('<strong style="color: red;">LOAD TIME: ' + (endTime - startTime) + 'ms</strong>');
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
