define(['backbone-all'], function(Backbone) {
  'use strict';

  return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'client': 'client',
      'placeholder1': 'placeholder1',
      'placeholder2': 'placeholder2',
      'placeholder3': 'placeholder3',
    }
  });
});
