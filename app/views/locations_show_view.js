var BaseView = require('./base_view')
  , moment = require('moment');

module.exports = BaseView.extend({
  className: 'locations_show_view',
  postInitialize: function() {
    //console.log('hey');
    Handlebars.registerHelper('formatTimestamp', function(timestamp){
      // create a new javascript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds
      var date = moment(timestamp*1000);
      return date.format("M/DD H:mm");
    });
  }
});
module.exports.id = 'LocationsShowView';
