const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('Hooks', function () {
 let spyConsole;

 beforeEach(function () {
   spyConsole = sinon.spy(console, 'log');
 });

 afterEach(function () {
   spyConsole.restore();
 });

 it('logs correctly with 200, 50', () => {
   sendPaymentRequestToApi(200, 50);

   expect(spyConsole.calledOnceWithExactly('The total is: 250')).to.be.true;
   expect(spyConsole.calledOnce).to.be.true;
 });

 it('logs correctly with 30, 70', () => {
   sendPaymentRequestToApi(30, 70);

   expect(spyConsole.calledOnceWithExactly('The total is: 100')).to.be.true;
   expect(spyConsole.calledOnce).to.be.true;
 });
});
