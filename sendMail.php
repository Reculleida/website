<?php
/**
 * User: Ivà Domingo
 * Date: 23/7/2017
 * Time: 18:27
 */
if (isset($_POST['submit'])) {

    $email_from = 'reculleida@eucatra.net';
    //$email_to = $_POST['email'];
    $email_to = 'reculleida@eucatra.net';
    $email_subject = 'Contacte web';
    $email_message = "<html> 
							<head> 
							<title>Nom" . $_POST['name'] . "</title> 
							</head> 
							<body> 
							<h1>Reculleida Web</h1>
							<p><h2>Sol.licitud d'informació del usuari:</h2>
							
							<br><b>Nom:&nbsp;&nbsp;</b>" . $_POST['name'] . "
							<br><b>Mail:</b>&nbsp;&nbsp;" . $_POST['email'] . "
							<br><b>Telèfon:</b>&nbsp;&nbsp;" . $_POST['tel'] . "
							<br><b>Departament</b>&nbsp;&nbsp;" . $_POST['department'] . "
							<br><b>Missatge:</b>&nbsp;&nbsp;" . $_POST['message'] . "
							<p><hr/>
							<br>No respongueu aquest missatge. Ha estat emès per un servei automàtic que no permet rebre respostes.
							
							</body> 
							</html> ";


    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers = 'From: ' . $email_from . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $bool= mail($email_to, $email_subject, $email_message, $headers);
   /* if($bool){
        echo " <br>Missatge enviat";
    }else{
        echo " <br>Missatge no enviat";
    }*/
}
?>