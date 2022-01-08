const laptops = require("./laptops.json");

function _lower(input) {
  return input.toLowerCase().trim();
}

module.exports = {
  getAll: function () {
    return laptops;
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
};
