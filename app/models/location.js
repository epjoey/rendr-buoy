var Base = require('./base');
module.exports = Base.extend({
  url: '/location/location.php?location=:id',
  idAttribute: 'id'
});
module.exports.id = 'Location';
