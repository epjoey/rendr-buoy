var Buoy = require('../models/buoy')
  , Base = require('./base');

module.exports = Base.extend({
  model: Buoy,
  url: function() {
    return '/buoy/buoys.php?location=:locationId';
  }
});
module.exports.id = 'Buoys';
