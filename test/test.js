"use strict";

var assert = require("assert");
var laptops = require("../index");
// var statesAndLocalGov = require('../src/statesAndLocalGov.json')

describe("laptops", function () {
  it("#all()", function () {
    var response = laptops.getAll();

    // console.log(response[0]);
    // assert.equal(response.length, 37);
    // assert.equal(typeof response toequal[]);
    // assert.equal(response[1].state, statesAndLocalGov[1].state);
    // assert.equal(response[1].lgas.length, statesAndLocalGov[1].lgas.length);
  });
  it("#brands()", function () {
    var response = laptops.getBrands();
    // console.log(response)
    // assert.equal(response.length, 37);
    // assert.equal(typeof response, typeof []);
    // assert.equal(response[0], 'Apple');
  });
  it("should get laptop details", function () {
    var response = laptops.getBrand("apple");
    console.log(response);
  });
  it("#models()", function () {
    var response = laptops.getModel();
    // console.log(response);
    // console.log(response)
    // assert.equal(response.length, 37);
    // assert.equal(typeof response, typeof []);
    // assert.equal(response[1], statesAndLocalGov[1].state);
    // assert.equal(response[36], 'Zamfara');
  });

  // it('#senatorial_districts()', function() {
  //     var response = naijaStates.senatorial_districts('Lagos');

  //     assert.equal(response.length, 3);
  // });

  // it('#lgas()', function() {
  //     var response = naijaStates.lgas('Lagos');

  //     assert.equal(response.state, 'Lagos');
  //     assert.equal(response.lgas.length, 21);
  // });
});
