import { getUSers } from "./common/usersAPI";
import "./style.scss";
import "./style.css";
import "index";

console.log("webpack");

const adding = (params) => {
	let total = params.reduce(function (sum, prev) {
		return (sum += prev);
	});
	return total;
};

console.log(myFunc(1, 2, 3, 4));

getUSers().then((json) => console.log(json));
