// Config settings for NODE_ENV=production

exports.config = {
  assets: {
    minify: true,
    cdn: {
      protocol: 'https',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    host: "www.buoy-report.com/api",
    protocol: "http"
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
