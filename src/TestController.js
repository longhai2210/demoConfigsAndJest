class TestController {
	adding(params) {
		let total = params.reduce(function (sum, prev) {
			return (sum += prev);
		});
		return total;
	}
	subtract(a, b) {
		return a - b;
	}
}

const testController = new TestController();

module.exports = testController;
