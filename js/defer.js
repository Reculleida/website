/**
 * Created by ivado on 23/7/2017.
 */
var element = document.createElement("script");
element.src = "./js/jquery.min.js";
document.body.appendChild(element);
element.src = "./js/bootstrap.min.js";
document.body.appendChild(element);

var elementLink =document.createElement("link");
elementLink.rel="stylesheet";
/**elementLink.type("text/css");**/
elementLink.href = "./css/bootstrap.min.css";
document.body.appendChild(elementLink);
elementLink.href = "./css/style.css";
document.body.appendChild(elementLink);

element.src = "./js/main.js";
document.body.appendChild(element);
