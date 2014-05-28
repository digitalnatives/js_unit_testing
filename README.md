#Unit testing

##Unit testing with a browser

```sh
git checkout browser
open chrome/firefox/safari/ie/etc 'test.html'
```

##Unit testing with multiple browser (karma)

```sh
git checkout karma
karma start
```

##Unit testing with node
```sh
git checkout node
karma start
```

##Unit testing with both
```sh
git checkout both
karma start
mocha
```

##Unit testing with both (grunt)
```sh
git checkout grunt
```

###Mocha with grunt
grunt mochaTest

###Karma with grunt
grunt karma

###Watch with grunt (auto run tests and jsint on file changes)
grunt watch
