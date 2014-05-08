module.exports =
  scripts:
    files: ['test/**/*.js', 'src/**/*.js']
    tasks: ['jshint', 'mochaTest:watch']
    interrupt: true
    options:
      spawn: false
