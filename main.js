function createXMLHttpRequestObject() {
  var aVersions = [ "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp","Microsoft.XMLHttp"];
  if (window.XMLHttpRequest){
    // para IE7, Mozilla, Safari, etc: que usen el objeto nativo
    return new XMLHttpRequest();
    }
    else if (window.ActiveXObject){
      // de lo contrario utilizar el control ActiveX para IE5.x y IE6.x
      for (var i = 0; i < aVersions.length; i++) {
        try {
          var oXmlHttp = new ActiveXObject(aVersions[i]);
          return oXmlHttp;
          }
        catch (error)	{
          //no necesitamos hacer nada especial
          }
      }
   }
};

function cotxes(url,e){
  var xhr =  createXMLHttpRequestObject();
  xhr.open("GET", url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                    var mostrar = document.getElementById("mostrar");
                    if(mostrar != null){
                      mostrar.parentNode.removeChild(mostrar);
                    }
                    mostrar = document.createElement("table");
                    mostrar.setAttribute("id","mostrar");
                    let header = mostrar.createTHead();
                    let row = header.insertRow(0);
                    let cell = row.insertCell(0);
                    cell.innerHTML = "Marca";
                    cell = row.insertCell(1);
                    cell.innerHTML = "Model";
                    let body = mostrar.createTBody();
                    var object = xhr.response;
                    var i=0;
                    object.coches.forEach(function(element){
                      console.log(object.coches[0]);	
                      console.log(Object.keys(object.coches[0]));
                      row = body.insertRow(i);
                      cell = row.insertCell(0)
                      cell.innerHTML = element.marca;
                      cell = row.insertCell(1)
                      cell.innerHTML = element.modelo;
                      i++;
                    }); 
                   e.parentNode.appendChild(mostrar);
                  } else {
                    console.error(xhr.statusText);
                  }
                }
              };
  xhr.send(null);
};   