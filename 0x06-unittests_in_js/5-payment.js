const Utils = require('./utils');

const sendPaymentRequestToApi = (amount, shipping) => {
 const total = Utils.calculateNumber('SUM', amount, shipping);
 console.log(`Total amount is: ${total}`);
};

module.exports = sendPaymentRequestToApi;
