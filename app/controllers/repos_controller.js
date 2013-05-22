module.exports = {
  index: function(params, callback) {
    var spec = {
      model: {collection: 'Repos', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      console.log(result);
      callback(err, 'repos_index_view', { 'foo': 'bar' });
    });
  },

  show: function(params, callback) {
    var spec = {
      model: {model: 'Repo', params: params, ensureKeys: ['language', 'watchers_count']}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'repos_show_view', result);
    });
  }
};
