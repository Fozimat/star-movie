import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import "./script/component/trending-list";
import "./script/component/footer-bottom";
import "./script/component/footer-trending";


import {
    main,
    trending
} from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", trending);