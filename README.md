# laptops


laptops is a lightweight zero-dependency npm package that can be used to get the list of laptop brands and models


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
console.log(laptops.getBrand('all'));
console.log(laptops.getBrand("popular"))
console.log(laptops.getBrand("Hp"))
...
```

| function        | argument                                            | response                                                                      |   |   |
|-----------------|-----------------------------------------------------|-------------------------------------------------------------------------------|---|---|
| .getAll()       | none                                                | it returns all laptops with brand names, series and models                    |   |   |
| .getBrand(args) | args(all,popular,hp,dell...)                        | Response is an object with brand name, an array of models and series passed   |   |   |
