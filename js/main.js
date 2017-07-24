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



if(document.title == "RecuLleida Contacte"){
    $(document).ready( function() {
        $("#formulari").submit(function(){
            var url = "./sendEmail.php";
            $.ajax({
                type:"POST",
                url:url,
                data: $("#formulari").serialize(),
                success: function(data)
                {
                    $("#resultat").html(data);
                }
            });
            return false;
        });
    });
}









