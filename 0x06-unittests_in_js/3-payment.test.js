const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spies', function () {
 it('verifies the calculation and output', () => {
   const spyUtils = sinon.spy(Utils, 'calculateNumber');
   const spyConsole = sinon.spy(console, 'log');

   sendPaymentRequestToApi(200, 50);

   expect(spyUtils.calledOnceWithExactly('SUM', 200, 50)).to.be.true;
   expect(spyConsole.calledOnceWithExactly('The total is: 250')).to.be.true;

   spyUtils.restore();
   spyConsole.restore();
 });
});
