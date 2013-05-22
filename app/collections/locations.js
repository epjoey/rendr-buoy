var Location = require('../models/location')
  , Base = require('./base');

module.exports = Base.extend({
  model: Location,
  url: function() {
    return '/location/locations.php';
  }
});
module.exports.id = 'Locations';
