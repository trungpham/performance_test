define(['backbone-all'], function(Backbone) {
  'use strict';
  
  return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      '': 'client'
    }
  });
});
