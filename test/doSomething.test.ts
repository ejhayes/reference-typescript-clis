import { doSomething } from "../src";
import * as chaiAsPromised from "chai-as-promised";
import * as chai from "chai";
import * as sinon from "sinon"
import * as sinonChai from "sinon-chai"
chai.use(sinonChai)
chai.use(chaiAsPromised);
const expect = chai.expect

describe("doSomething", () => {
    it("failing promise...", () => {
        // if running test:debug this should appear
        // in debugger.
        debugger;

        let ret = doSomething('this is a test');

        // must return otherwise get an unhandled promise rejection
        return expect(ret).to.eventually.equal('definitely not this');
    })

    it.only("failing stub...", () => {
    	let stub = sinon.stub();
    	stub.withArgs(2).returns(1);

    	expect(stub(2)).to.equal(2)
    })
});