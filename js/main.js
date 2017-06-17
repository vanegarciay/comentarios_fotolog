recoveryData();

function validateData() {
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;

    if( nombre != "" && comentario!= "") {
        return saveData();
    }
    else {
        alert("Debes poner tú nombre y un comentario");
    }
}

function saveData(){
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;
    localStorage.setItem(nombre,comentario);
    recoveryData();
    clearInputs();
}

function recoveryData(){
        var datos_limpiados = document.getElementById("datos_limpiados");
        if (datos_limpiados != null) {
            datos_limpiados.innerHTML = "";
        }


    for(var i = 0; i < localStorage.length; i++){
        var nombre = localStorage.key(i);
        var comentario = localStorage.getItem(nombre);

        var datos_padre = document.getElementById("data")
        var caja_comentario = document.createElement("div");
        var p_nombre = document.createElement("p");
        var p_comentario = document.createElement("p");
        var strong_comentario = document.createElement("strong");
        var strong_nombre = document.createElement("strong");
        var title_nombre = document.createTextNode("Nombre: ");
        var content_nombre = document.createTextNode(nombre);
        var title_comentario = document.createTextNode("Dice: ");
        var content_comentario = document.createTextNode(comentario);
        caja_comentario.setAttribute("class", "caja-comentario");

        strong_nombre.appendChild(title_nombre);
        p_nombre.appendChild(strong_nombre);

        strong_comentario.appendChild(title_comentario);
        p_comentario.appendChild(strong_comentario);
        p_comentario.appendChild(content_comentario);
        p_nombre.appendChild(content_nombre);
        caja_comentario.appendChild(p_nombre);
        caja_comentario.appendChild(p_comentario);
        datos_padre.appendChild(caja_comentario);
    }
}

function cleanData(){
    localStorage.clear();
    document.getElementById("data").innerHTML = '<p id="datos_limpiados">Datos limpiados</p>';
}

function clearInputs() {
    document.getElementById("nombre").value = "";
    document.getElementById("comentario").value = "";
}