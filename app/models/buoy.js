var Base = require('./base');
module.exports = Base.extend({
  url: '/buoy/buoy.php?id=:id',
  idAttribute: 'buoyid'
  //reportDate: function()
});
module.exports.id = 'Buoy';
