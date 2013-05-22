module.exports = {
  index: function(params, callback) {
    var spec = {
      model: {model: 'Repo', params: params, ensureKeys: ['language', 'watchers_count']}
    };
    this.app.fetch(spec, function(err, result) {
      console.log(result);
      callback(err, 'weather_index_view', result);
    });
  }
};
