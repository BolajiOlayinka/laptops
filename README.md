# laptops


laptops is a lightweight zero-dependency npm package that can be used to get the list of laptop brands and models

[![NPM](https://nodei.co/npm/laptops.png)](https://nodei.co/npm/laptops/)

[![npm version](https://badge.fury.io/js/laptops.svg)](https://www.npmjs.com/package/laptops)

### Installation
``` Javascript

npm install laptops

```

### Example

``` Javascript
//ES5
const laptops = require('laptops');

// ES6
import laptops from 'laptops';

console.log(laptops.getAll());
// Get all arguments (args) from getBrand('all')
console.log(laptops.getBrand('all')); 
console.log(laptops.getBrand("popular"))
console.log(laptops.getBrand("Hp"))
console.log(laptops.getModel("Asus"))
console.log(laptops.getSeries("Apple"))
...
```

| function        | argument                                            | response                                                                      |   |    |
|-----------------|-----------------------------------------------------|-------------------------------------------------------------------------------|---|----|   
| .getAll()       | none                                                | brand names, series and models.These are also args for getbrand(),getModel & getSeries | 
| .getBrand(args) | args(all,popular,hp,dell...)                        | Response is an object with brand name, an array of models and series passed   |   |    |
| .getModel(args) | args(all,popular,hp,dell,Asus...)                   | Response is an array of models that belong to a brand                         |   |    |
| .getSeries(args)| args(all ....)                                      | Response is an array of series that belong to a brand                         |   |    |
