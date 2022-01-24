import hello from "./index";

describe("testy mc'testface", () => {
    it("should greet", () => {
        expect(hello("mcTestersson")).toBe("Hello mcTestersson");
    });
});
