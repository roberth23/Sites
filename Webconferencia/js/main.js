(function() {
    "use strict";
    var regalo = document.getElementById('regalo');
    document.addEventListener('DomContentLoader', function() {

        //campos datos usuarios 
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
            console.log(regalo);
            console.log("El valor de regalo es [" + regalo.value + "]");
        }

    }); //Dom Content Loader
})();