import theme from "./components/theme.js"
import menu from "./menu.json"
import template from "./template/menuTemplate.hbs"
import './styles.css';

theme().themeChange()

document.querySelector(".js-menu").innerHTML = template(menu)