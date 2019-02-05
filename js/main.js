/**
 * Created by iva on 17/6/2017.
 */

/** Analytics code **/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-98654229-3', 'auto');
ga('send', 'pageview');



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

/*if(document.title == "RecuLleida Contacte"){
    $(document).ready( function() {
        $("#formulari").submit(function(){
            var url = "./sendMail.php";
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
}*/









