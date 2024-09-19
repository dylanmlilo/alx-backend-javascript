const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
   describe("SUM", function() {
   it("checking if numbers round", function() {
      expect(calculateNumber("SUM", 3, 2)).to.equal(5);
   });
   it("checking if numbers round", function() {
      expect(calculateNumber("SUM", 2.3, 3.7)).to.equal(6);
   });
   });
   describe("SUBTRACT", function() {
   it("checking if numbers round", function() {
      expect(calculateNumber("SUBTRACT", 1.6, 2.5)).to.equal(-1);
   });
   it("checking if numbers round", function() {
      expect(calculateNumber("SUBTRACT", 5.1, 2.9)).to.equal(2);
   });
   it("checking if numbers round", function() {
      expect(calculateNumber("SUBTRACT", -3.9, -1.3)).to.equal(-2);
   });
   });
   describe("DIVIDE", function() {
   it("checking if numbers round", function() {
      expect(calculateNumber("DIVIDE", 8, 4)).to.equal(2);
   });
   it("checking if numbers round", function() {
      expect(calculateNumber("DIVIDE", 5.6, 2.2)).to.equal(2.5);
   });
   it("checking if numbers round", function() {
      expect(calculateNumber("DIVIDE", 6, 0)).to.equal("Error");
   });
   });
});
