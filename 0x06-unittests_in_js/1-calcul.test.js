const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
 describe('SUM no Round', function () {
   it('should return 7', function () {
     assert.equal(calculateNumber('SUM', 2, 5), 7);
   });
 });

 describe('SUM first round', function () {
   it('should return 7', function () {
     assert.equal(calculateNumber('SUM', 3.5, 3.5), 7);
   });
 });

 describe('SUM second round ', function () {
   it('should return 7', function () {
     assert.equal(calculateNumber('SUM', 4, 3), 7);
   });
 });

 describe('SUM both round', function () {
   it('should return 8', function () {
     assert.equal(calculateNumber('SUM', 3.4, 4.6), 8);
   });
 });

 describe('SUBTRACT no round', function () {
   it('should return 4', function () {
     assert.equal(calculateNumber('SUBTRACT', 7, 3), 4);
   });
 });

 describe('SUBTRACT first round', function () {
   it('should return -2', function () {
     assert.equal(calculateNumber('SUBTRACT', 5, 3.5), -2);
   });
 });

 describe('SUBTRACT second round', function () {
   it('should return 1', function () {
     assert.equal(calculateNumber('SUBTRACT', 4.5, 3.5), 1);
   });
 });

 describe('SUBTRACT both round', function () {
   it('should return -2', function () {
     assert.equal(calculateNumber('SUBTRACT', 3.2, 5.3), -2);
   });
 });

 describe('DIVIDE no round', function () {
   it('should return 3', function () {
     assert.equal(calculateNumber('DIVIDE', 9, 3), 3);
   });
 });

 describe('DIVIDE first round', function () {
   it('should return 4', function () {
     assert.equal(calculateNumber('DIVIDE', 8.5, 2), 4);
   });
 });

 describe('DIVIDE second round', function () {
   it('should return 0.3', function () {
     assert.equal(calculateNumber('DIVIDE', 3.5, 10), 0.3);
   });
 });

 describe('DIVIDE both round', function () {
   it('should return 0.3', function () {
     assert.equal(calculateNumber('DIVIDE', 1.5, 5), 0.3);
   });
 });

 describe('DIVIDE Error', function () {
   it('should return Error', function () {
     assert.equal(calculateNumber('DIVIDE', 2, 0), 'Error');
   });
 });
});
