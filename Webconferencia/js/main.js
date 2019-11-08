(function() {
    "use strict";
    if (document.readyState !== "loading") {
        setTimeout(ready, 0); //if you want it consistently async
    } else {
        document.addEventListener("DOMContentLoaded", ready);
    }
})();

function ready(){
    //campos datos usuarios 
    var regalo = document.getElementById('regalo');
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //campo pases, por un dia, por 2 y completo
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    // Botones y Divs
    var calcular = document.getElementById('calcular'); 
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnregistro');
    var resultado = document.getElementById('lista_producto');

    calcular.addEventListener('click', calcularMontos);
  
    function calcularMontos(event){
        event.preventDefault();
        console.log("El valor de regalo es [" + regalo.value + "]");
    }
}