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
      if (laptop[queryType] === param) {
        return laptop;
      }
    });
  },
  // module.exports = {
  //     getBanks: function() {
  //       return banks;
  //     },

  //     getModel: function (param) {
  //       const isModel = isNaN(param);
  //       const queryType = isModel ? 'models' : 'code';
  //       return laptopBrands.find(function(laptop) {
  //         if (laptop[queryType] === param) {
  //           return laptop;
  //         }
  //       })
  //     }

  senatorial_districts: function (state) {
    state = _lower(state);
    if (!state || state == "") {
      throw new Error("Invalid Nigeria State");
    }

    if (["fct", "f.c.t", "abuja", "f c t"].includes(state)) {
      state = "Federal Capital Territory";
    }

    const response = statesAndLocalGov.find(function (nigeriaStates) {
      return _lower(nigeriaStates.state) === _lower(state);
    });
    return response.senatorial_districts;
  },
  lgas: function (state) {
    state = _lower(state);

    if (!state || state == "") {
      throw new Error("Invalid Nigeria State");
    }

    if (["fct", "f.c.t", "abuja", "f c t"].includes(state)) {
      state = "Federal Capital Territory";
    }

    return statesAndLocalGov.find(function (nigeriaStates) {
      return _lower(nigeriaStates.state) === _lower(state);
    });
  },
};
