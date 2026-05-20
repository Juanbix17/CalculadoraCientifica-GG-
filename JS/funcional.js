let p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantisignos: 0,
    cantdecimal: false,
    resultado: false
}

let m = {
    inicio: function()
    {
        for(let i = 0; i < p.teclas.length; i++)
        {
            p.teclas[i].addEventListener("click", m.oprimirtecla);
        }
    },
    oprimirtecla: function(tecla)
    {
        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        m.calculadora();
    },
    calculadora: function()
    {
        switch(p.accion)
        {
            case "numero":
                p.cantisignos = 0;
                if (p.operaciones.innerHTML == "0" || p.resultado) {
                    p.operaciones.innerHTML = p.digito;
                    p.resultado = false;
                } else {
                    p.operaciones.innerHTML += p.digito;
                }
            break;

            case "simbolo":
                p.cantisignos++;
                if (p.cantisignos == 1) {
                    if (p.operaciones.innerHTML != "0") {
                        p.operaciones.innerHTML += p.digito;
                        p.cantdecimal = false;
                        p.resultado = false;
                    }
                }
            break;

            case "decimal":
                if (!p.cantdecimal && p.cantisignos == 0) {
                    p.operaciones.innerHTML += p.digito;
                    p.cantdecimal = true;
                    p.resultado = false;
                }
            break;

            case "igual":
                try {
                    let resultado = eval(p.operaciones.innerHTML);

                    if(resultado == Infinity || resultado == -Infinity){
                        p.operaciones.innerHTML = "Syntax Error";
                    }else{
                        p.operaciones.innerHTML = resultado;
                    }
                } catch(e) {
                    p.operaciones.innerHTML = "Error";
                }
                p.resultado = true;
                p.cantdecimal = false;
            break;
            case "borrar":
                p.operaciones.innerHTML = p.operaciones.innerHTML.slice(0, -1);

                if (p.operaciones.innerHTML == "") {
                    p.operaciones.innerHTML = "0";
                }
            break;
        }
    }
}
m.inicio();
document.addEventListener("keydown", function(tecla){

    let teclaPresionada = tecla.key;

    if(!isNaN(teclaPresionada)){
        p.accion = "numero";
        p.digito = teclaPresionada;
        m.calculadora();
    }

    if(teclaPresionada == "+" || teclaPresionada == "-" || teclaPresionada == "*" || teclaPresionada == "/"){
        p.accion = "simbolo";
        p.digito = teclaPresionada;
        m.calculadora();
    }

    if(teclaPresionada == "."){
        p.accion = "decimal";
        p.digito = teclaPresionada;
        m.calculadora();
    }

    if(teclaPresionada == "Enter"){
        p.accion = "igual";
        p.digito = "=";
        m.calculadora();
    }

    if(teclaPresionada == "Backspace"){
        p.accion = "borrar";
        p.digito = "C";
        m.calculadora();
    }

});