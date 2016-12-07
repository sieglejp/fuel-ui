#Fuel-UI [![npm version](https://badge.fury.io/js/fuel-ui.svg)](https://badge.fury.io/js/fuel-ui) [![npm downloads](https://img.shields.io/npm/dm/fuel-ui.svg)](https://npmjs.org/fuel-ui) [![Dependency Status](https://david-dm.org/fuelinteractive/fuel-ui.svg)](https://david-dm.org/fuelinteractive/fuel-ui) [![devDependency Status](https://david-dm.org/fuelinteractive/fuel-ui/dev-status.svg)](https://david-dm.org/fuelinteractive/fuel-ui#info=devDependencies)

A set of UI components for use with Angular 2 and Bootstrap 4.

See [Fuel-UI](http://fuelinteractive.github.io/fuel-ui/) homepage for live demo and documentation.

##Dependencies
- Node
- Gulp

##Build
Execute the following commands to run the demo in your local environment. A browser window pops up with the demo running at [http://localhost:3000](http://localhost:3000)

```
npm install
npm run sass
npm run build
npm run server
```

##Installation

####Fork our Quickstart! [https://github.com/coryshaw1/ng2-play/](https://github.com/coryshaw1/ng2-play/)
####Fork our angular-cli Quickstart! [https://github.com/FuelInteractive/fuel-ui-cli-quickstart/](https://github.com/FuelInteractive/fuel-ui-cli-quickstart/)

###Manually with Webpack

If you would like to add Fuel-UI to your Angular2 project through npm manually, do the following:

```
npm install fuel-ui --save
```

Then simply add the proper module(s) to your base component
```js
import { FuelUiModule } from 'fuel-ui';

@NgModule({
  bootstrap: [ YourBaseComponent ],
  declarations: [ YourBaseComponent, ... ],
  imports: [ FuelUiModule, ... ],
  providers: [ ... ]
})
```

You then need to make sure you add references to the following:
 * [Bootstrap 4](http://v4-alpha.getbootstrap.com/)
 * [Font Awesome](http://fontawesome.io/)
 * [Fuel-UI CSS Bundle](https://github.com/FuelInteractive/fuel-ui/) (for Tooltips and CodeHighlighter, will be in `node_modules/fuel-ui/bundles/fuel-ui.css`)
 
There are different ways of doing adding these. In our [Github project](https://github.com/FuelInteractive/fuel-ui/), we use Webpack loaders to achieve this where we can (see [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) and [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack)). You may also just simply add the vendor CSS files to the head. *You do not need the javascript for these*

###Manually with [angular-cli](https://github.com/angular/angular-cli)

```
ng new example-project
cd example-project
npm install fuel-ui font-awesome bootstrap@^4.0.0-alpha.5 --save
```
Go to your `angular-cli.json` file, and add the following to your `styles` array:
```js
"../node_modules/bootstrap/dist/css/bootstrap.min.css",
"../node_modules/font-awesome/css/font-awesome.min.css",
"../node_modules/fuel-ui/bundles/fuel-ui.css"
```
Next, still within your `angular-cli.json` file, add the following to your `addons` array:
```js
"../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)"
```
Now build the project to copy over the necessary files
```
ng build
```
Then simply add the proper module(s) to your base component
```js
import { FuelUiModule } from 'fuel-ui';

@NgModule({
  bootstrap: [ YourBaseComponent ],
  declarations: [ YourBaseComponent, ... ],
  imports: [ FuelUiModule, ... ],
  providers: [ ... ]
})
```

###Manually with SystemJs

```
npm install fuel-ui --save
```
Go to your SystemJs config file, and add the following to your map array:
```
"moment": "node_modules/moment/moment.js",
"fuel-ui": "node_modules/fuel-ui/bundles/fuel-ui.umd.js",
```
Then the proper link tags to your `index.html`'s `<head>`

```html
<head>
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="node_modules/fuel-ui/bundles/fuel-ui.css" />
</head>
```
Then simply add the proper module(s) to your base component
```js
import { FuelUiModule } from 'fuel-ui';

@NgModule({
  bootstrap: [ YourBaseComponent ],
  declarations: [ YourBaseComponent, ... ],
  imports: [ FuelUiModule, ... ],
  providers: [ ... ]
})
```

##Animations
- [Collapse](https://github.com/FuelInteractive/fuel-ui/tree/master/src/animations/Collapse#readme)

##Components
- [Accordion](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Accordion#readme)
- [Alert](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Alert#readme)
- Carousel (documentation in progress)
- [DatePicker](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/DatePicker#readme)
- [Dropdown](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Dropdown#readme)
- [InfiniteScroller](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/InfiniteScroller#readme)
- [Modal](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Modal#readme)
- [OffCanvasMenu](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/OffCanvasMenu#readme)
- [Pagination](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Pagination#readme)
- [Progressbar](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Progress#readme)
- [Slider](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Slider#readme)
- [TableSortable](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/TableSortable#readme)
- [Tabs](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Tab#readme)
- [Tags](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/Tag#readme)
- [TextExpander](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/TextExpander#readme)
- [TimePicker](https://github.com/FuelInteractive/fuel-ui/tree/master/src/components/TimePicker#readme)

##Directives
- [Animation (helper)](https://github.com/FuelInteractive/fuel-ui/tree/master/src/directives/Animation#readme)
- [CodeHighlighter](https://github.com/FuelInteractive/fuel-ui/tree/master/src/directives/CodeHighlighter#readme)
- [Tooltip](https://github.com/FuelInteractive/fuel-ui/tree/master/src/directives/Tooltip#readme)

##Pipes
- [Format](https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/Format#readme)
- [MapToIterable](https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/MapToIterable#readme)
- [OrderBy](https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy#readme)
- [Range](https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/Range#readme)
