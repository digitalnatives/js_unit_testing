module.exports =
  watch:
    options:
      clearRequireCache: true
    src: ['test/**/*.js']

  test:
    options:
      clearRequireCache: true
      reporter: 'spec'
    src: ['test/**/*.js']
