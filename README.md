# tailwind-boilerplate-webpack-purgecss


### Installation

You must install node package manager [npm](https://nodejs.org/en/download/) before running the application

Install dependencies
```sh
$ npm install 
```
Start Development Server
```sh
$ npm run start-dev
```
Build Production
```sh
$ npm run build
```

If you are on linux/MacOS
Change build script
```sh
"build" : "export NODE_ENV=production && webpack --config webpack/webpack-prod.js --mode production"
```
