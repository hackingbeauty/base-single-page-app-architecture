## Development
```
$ npm i
$ npm start
```
## Clean
```
$ npm run clean
```
Using rimraf clean the `dist` folder, which is the target of the `build`

## Build & build:production
```
$ npm run build
```
Builds the app into the 'dist' folder for deployment
```
$ npm run build:production
```
clean the `dist` folder and rebuilds the app for deployment

## Run Automated test suite
```
$ npm test
```

## Run ESLint
```
$ npm run lint
```

## Material UI Icons:

step 1 - this font stylesheet must be in the header of your index.html
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
```
step 2 - use this material ui icon component: 
```
<FontIcon className="material-icons">home</FontIcon>
```
step 3 - go here and insert the right text for the appropriate icon: https://design.google.com/icons/