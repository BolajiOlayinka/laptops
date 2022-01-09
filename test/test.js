"use strict";

var assert = require("assert");
var laptops = require("../index");
const fs = require("fs");

describe("laptops", function () {
  let laptopdb = [];

  before(function (done) {
    laptopdb = JSON.parse(
      fs.readFileSync(process.cwd() + "/laptops.json", "utf8")
    );
    done();
  });
  it("It should get all Laptop DB and it should be an object", function (done) {
    var response = laptops.getAll();
    assert.equal(typeof response, "object");
    assert.deepStrictEqual(response, laptopdb);
    done();
  });
  it("It should return all models that belongs to a particular brand", function (done) {
    var response = laptops.getModel("Optima");
    console.log(response);
    assert.equal(typeof response, typeof []);
    assert.deepStrictEqual(response, [
      "OptimBook",
      "OptimBook Pro",
      "NoteBook",
      "NoteBook Pro",
      "MECIPT",
      "MECIPT Pro",
      "DACICC",
      "DACICC Pro",
      "CIFA",
      "CIFA Pro",
      "CET",
      "CET Pro",
      "Coral",
      "Coral Pro",
      "Workstation Pro",
    ]);
    assert.deepStrictEqual(laptops.getModel("Microtech"), [
      "CoreBook i3",
      "CoreBook R5",
      "Corebook Notebook",
      "Lite A",
      "Lite C",
      "E-book Lite",
    ]);
    done();
  });
  it("should get a particular laptop brand", function () {
    var response = laptops.getBrand("apple");
    assert.equal(typeof response, "object");
    assert.deepEqual(laptops.getBrand("Optima"), {
      brands: "Optima",
      series: null,
      models: [
        "OptimBook",
        "OptimBook Pro",
        "NoteBook",
        "NoteBook Pro",
        "MECIPT",
        "MECIPT Pro",
        "DACICC",
        "DACICC Pro",
        "CIFA",
        "CIFA Pro",
        "CET",
        "CET Pro",
        "Coral",
        "Coral Pro",
        "Workstation Pro",
      ],
    });
    assert.deepEqual(laptops.getBrand("Microtech"), {
      brands: "Microtech",
      series: ["Corebook", "Corebook", "Lite"],
      models: [
        "CoreBook i3",
        "CoreBook R5",
        "Corebook Notebook",
        "Lite A",
        "Lite C",
        "E-book Lite",
      ],
    });

    // console.log(response);
  });
  it("should get all the series that belongs to a brand", function () {
    var response = laptops.getSeries("Hp");
    assert.equal(typeof response, typeof []);
    assert.equal(response.length, 8);
  });
});
