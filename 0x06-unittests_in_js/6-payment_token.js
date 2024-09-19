function getPaymentTokenFromAPI(success) {
   if (success) {
      return new Promise((resolve) => {
         resolve({ data: 'Success response from the API' });
      });
   }
}

module.exports = getPaymentTokenFromAPI;
