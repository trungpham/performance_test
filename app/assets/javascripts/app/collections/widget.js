define(['backbone-all', 'app/models/widget'], function(Backbone, WidgetModel) {
  'use strict';
  
  return Backbone.Collection.extend({
  	url: '/api/widgets',
    model: WidgetModel
  });
});
