class TestController {
	adding(params) {
		params.reduce(function (sum, prev) {
			return (sum += prev);
		});
	}
	subtract(a, b) {
		return a - b;
	}
}

const testController = new TestController();

module.exports = testController;
