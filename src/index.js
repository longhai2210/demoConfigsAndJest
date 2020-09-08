import { getUSers } from "./common/usersAPI";
import "./style.scss";
import "./style.css";
import "index";

console.log("webpack");

const myFunc = (...params) => {
	params.reduce((sum, prev) => (sum += prev));
};

console.log(myFunc(1, 2, 3, 4));

getUSers().then((json) => console.log(json));
