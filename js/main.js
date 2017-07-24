/**
 * Created by iva on 17/6/2017.
 */
console.log(document.title);
if(document.title == "RecuLleida") {
    var noticia;
    noticia = document.getElementById("noticia1");
    noticia.addEventListener("click", function () {
        window.location.href = "./noticies.html?#noticia1";
    });
    noticia = document.getElementById("noticia2");
    noticia.addEventListener("click", function () {
        window.location.href = "./noticies.html?#noticia2";
    });
    noticia = document.getElementById("noticia3");
    noticia.addEventListener("click", function () {
        window.location.href = "./noticies.html?#noticia3";
    });
}



function resposta(){
    var element;
    element = document.createElement("p");
    element.appendChild(document.createTextNode("Missatge enviat, gràcies per la seva comunicació"));
    document.body.appendChild(element);
}









