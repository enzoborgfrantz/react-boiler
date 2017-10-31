# react-boiler
Boilerplate Project for React.

> Simple setup that comes with hot-reloading, styled-components, and test setup with watch and coverage

### Scripts

`npm start` - Starts the app on http://localhost:8080

`npm run test` - Runs all the tests once

`npm run test: watch` - Runs the tests, and watches for changes, running only changed files

`npm run test: coverage` - Runs the tests with coverage and watches for changes, running only changed files

## Webpack

### loaders
	
[`babel-loader`](https://github.com/babel/babel-loader) - Transpiles js & jsx down to es5

### plugins

#### base
[`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Deletes the dist directory before building a new bundle

[`html-webpack-plugin`](https://webpack.js.org/plugins/html-webpack-plugin/) - Creates a new html file, using the one under /src as a template, and outputs it in the dist directory with the newly created js bundle injected in the body

#### prod
[`uglifyjs-webpack-plugin`](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) - Uglifies the code making the bundle smaller

[`webpack: DefinePlugin`](https://webpack.js.org/plugins/define-plugin/) - used to set `process.env.NODE_ENV === 'production'` which allows some libraries (like react) to realize it's in production mode and thus eliminate unnecessary code, [read more](https://webpack.js.org/guides/production/#specify-the-environment) 

[`webpack: ModuleConcatenationPlugin`](https://webpack.js.org/plugins/module-concatenation-plugin/) - Hoists the scope of all modules into one closure, allowing for faster code execution in the browser

#### analyze
[`webpack-bundle-analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Visualizes the output bundle, making it easy to see what's inside the bundle

