const laptopBrands = require("./laptops.json");

function _lower(input) {
  return input.toLowerCase().trim();
}

module.exports = {
  getAll: function () {
    return laptopBrands;
  },
  getBrands: function () {
    // return laptopBrands.map(function (laptop) {
    //     return laptop
    // });
    return laptopBrands[0]["models"];
  },
  getBrand: function (param) {
    const isBrand = isNaN(param);
    const queryType = isBrand ? "brands" : "models";
    return laptopBrands.find(function (laptop) {
      if (laptop[queryType] === param) {
        return laptop;
      }
    });
  },
  getModel: function () {
    return laptopBrands.map(function (laptop) {
      // Remove first and second array
      let newArr = [];
      newArr.push(laptop.models);
      return newArr.flat();
      // let newArr = arr.shift();
      // return newArr.concat.apply();
    });
  },
  getBrand: function (param) {
    const isBrand = isNaN(param);
    const queryType = isBrand ? "brands" : "code";
    return laptopBrands.find(function (laptop) {
      if (_lower(laptop[queryType]) === _lower(param)) {
        return laptop;
      }
    });
  },
};
