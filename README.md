#Unit testing

```
install nodejs on your machine
```

##Unit testing with a browser

```sh
git checkout browser
open test.html
```

##Unit testing with multiple browser (karma)

```sh
git checkout karma
npm install
karma start
```

##Unit testing with node
```sh
git checkout node
npm install
karma start
```

##Unit testing with both
```sh
git checkout both
npm install
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
