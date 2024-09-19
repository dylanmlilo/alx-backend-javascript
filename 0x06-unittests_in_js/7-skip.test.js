const { expect } = require('chai');

describe('Testing numbers', () => {
 it('10 is equal to 10', () => {
   expect(10 === 10).to.be.true;
 });

 it('20 is equal to 20', () => {
   expect(20 === 20).to.be.true;
 });

 it.skip('15 is equal to 30', () => {
   expect(15 === 30).to.be.true;
 });

 it('30 is equal to 30', () => {
   expect(30 === 30).to.be.true;
 });

 it('40 is equal to 40', () => {
   expect(40 === 40).to.be.true;
 });

 it('50 is equal to 50', () => {
   expect(50 === 50).to.be.true;
 });

 it('60 is equal to 60', () => {
   expect(60 === 60).to.be.true;
 });

 it('70 is equal to 70', () => {
   expect(70 === 70).to.be.true;
 });
});
