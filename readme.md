# react-started-kit

Hello world simple page application.  
**Babel** - compile to ES5  
**Stylus, PostCSS** - css preprocessor  
**React** **Redux**  
**Webpack** - build manager  
**Mocha, Chai, Sinon** - unit tests library  
**Isparta** - code coverage  
**eslint, stylint** - JavaScript and Stylus code validation  
**Gulp** for run linters

Tested with Node.js 6
### Install
```
npm install
```

### Usage
Run http server + watcher
```
npm start
```

Open in your browser
```
http://localhost:8080/  
http://localhost:8080/webpack-dev-server/ with live reload
```

Run unit test. (Single run with PhantomJS)
```
npm test
```

Compile build. (Are put into ./build folder)
```
npm run build
```

Check JavaScript and Stylus code validation
```
npm run lint
```

### Git
On pre-commit set up hook for checking modified/added files by linter  
On pre-push run unit tests
