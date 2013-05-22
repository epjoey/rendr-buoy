// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    host: "localhost/api",
    port: "80",
    //host: "api.wunderground.com/api/d3e2c544440a0abb",
    protocol: "http"
    //host: "www.buoy-report.com/api",
    //protocol: "http"
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
