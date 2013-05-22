module.exports = {
  index: function(params, callback) {
    //console.log('here');
    var spec = {
      collection: {collection: 'Locations', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'locations_index_view', result);
    });
  },

  show: function(params, callback) {
    //Handlebars.registerHelper('toDate')
    var spec = {
      model: {model: 'Location', params: params},
      //collection: {collection: 'Buoys', params: {'locationId':params.id}}
    };
    this.app.fetch(spec, function(err, result) {
      //console.log(result);
      callback(err, 'locations_show_view', result);
    });
  }  
};
