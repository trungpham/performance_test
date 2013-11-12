define(['backbone-all', 'app/models/widget'], function(Backbone, WidgetModel) {
  'use strict';
  
  return Backbone.Collection.extend({
    model: WidgetModel
  });
});
