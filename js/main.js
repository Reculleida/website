/**
 * Created by iva on 17/6/2017.
 */
if(document.title == "RecuLleida inici") {
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













