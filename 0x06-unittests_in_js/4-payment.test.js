const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
   it("verifies stubbing of Utils.calculateNumber", function() {
   const spy = sinon.spy(console, "log");
   const stub = sinon.stub(Utils, "calculateNumber").returns(25);
   sendPaymentRequestToApi(200, 50);

   assert(spy.withArgs("The total is: 25").calledOnce);
   assert(stub.withArgs("SUM", 200, 50).calledOnce);
   });
});
