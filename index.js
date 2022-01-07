const laptopBrands = require("./laptops.json");

function _lower(input) {
  return input.toLowerCase().trim();
}

module.exports = {
  getAll: function () {
    return laptopBrands;
  },

  getBrand: function (param) {
    const isBrand = isNaN(param);
    const queryType = isBrand ? "brands" : "models";
    return laptopBrands.find(function (laptop) {
      if (_lower(laptop[queryType]) === _lower(param)) {
        return laptop;
      }
    });
  },
};
