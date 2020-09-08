const testController = require("../../src/TestController");

describe("testing", () => {
	it("should be sum", () => {
		expect(testController.adding([1, 2, 3])).toBe(6);
	});
	it("should be abstraction", () => {
		expect(testController.subtract(3, 1)).toBe(2);
	});
});
