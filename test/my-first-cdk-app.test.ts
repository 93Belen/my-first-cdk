import { handler } from "../src";

describe("My First CDK app Test", () => {
    it("returns name and tesks", async () => {
        const output = await handler({ name: "Faruk"});
        expect(output).toStricEqual("Good Job Faruk!")
    })
    it("returns no name and tesks", async () => {
        const output = await handler({ name: ""});
        expect(output).toStricEqual("Good Job")
    })

})