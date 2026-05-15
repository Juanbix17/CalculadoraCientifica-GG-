// crear las propiedades del objeto

let p = {
    teclas:document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantisignos: 0,
    cantdecimal: false,
    resultado: 0,
}
// crear los metodos

let m = {
    inicio:function()
    {
        for(let i = 0; i < p.teclas.length; i++)
        {
            p.teclas[i].addEventListener("click", m.oprimirtecla);
        }
    },
    oprimirtecla:function(tecla)
    {
        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        m.calculadora();
    },
    calculadora: function()
    {
        switch(accion)
        {
            case "numero":
                console.log("numero");
            break;
            case "signo":
                console.log("signo");
            break;
            case "decimal":
                console.log("decimal");
            break;
            case "igual":
                console.log("igual");
            break;
        }
    }
}
m.inicio();