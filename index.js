const laptops = require("./laptops.json");

function _lower(input) {
  return input.toLowerCase().trim();
}

module.exports = {
  getAll: function () {
    return laptops.sort((a,b)=>_lower(a.brands) < _lower(b.brands) ? -1 : _lower(a.brands) > _lower(b.brands) ? 1 : 0)
  },

  getBrand: function (param) {
    const isBrand = isNaN(param);
    const queryType = isBrand ? "brands" : "models";
    return laptops.find(function (lap) {
      if (_lower(lap[queryType]) === _lower(param)) {
        return lap;
      }
    });
  },
  getModel: function (brand) {
    // brand = _lower(brand);

    if (!brand || brand == "") {
        throw new Error('Error in getting Laptop Models');
    }

    const response = laptops.find(function (lapbrand) {
        if(_lower(lapbrand.brands)===_lower(brand)){
          return true
        }
    });
    // console.log(response.models.sort())
    return response.models;
},
getSeries: function (brand) {
  // brand = _lower(brand);

  if (!brand || brand == "") {
      throw new Error('Error in getting Laptop Series');
  }

  const response = laptops.find(function (lapbrand) {
      if(_lower(lapbrand.brands)===_lower(brand)){
        return true
      }
  });
  
  return response.series;
},
};
