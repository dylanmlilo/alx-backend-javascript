const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
 const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
 console.log(`The total amount is: ${result}`);
};

module.exports = sendPaymentRequestToApi;
