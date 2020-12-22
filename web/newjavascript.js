
window.onload = init;


function init() {
    fetch('servletCargarDatos').then(function (resultado) {
        return resultado.json();
    }).then(construirMenus);
}

function construirMenus(datos)
{
    construirProvincias(datos);
    construirCantones(datos);
    construirDistritos(datos);
    datosTotales = datos;
    calcularCodigo();
}

function construirProvincias(datosProvincias)
{
    console.log("datos", datosProvincias);
    var refMenu = document.getElementById('MenuProvincia');
    if (refMenu) {
        while (refMenu.options.length) {
            refMenu.options.remove(0);
        }
        datosProvincias.forEach(
                function (elemento, i, arreglo) {
                    var opcion = document.createElement("option");
                    if (elemento.canton === 0 &&
                            elemento.distrito === 0
                            && elemento.seq_distrito === 0)
                    {
                        opcion.setAttribute("value", String(i + 1));
                        opcion.appendChild(document.createTextNode(elemento.nombre));
                        refMenu.appendChild(opcion);
                    }
                }
        );
    }
}

function construirCantones(datosCantones, np)
{
    console.log("datos1", datosCantones);
    np = 1;
    var refMenu = document.getElementById('MenuCanton');
    if (refMenu) {
        while (refMenu.options.length) {
            refMenu.options.remove(0);
        }
        datosCantones.forEach(
                function (elemento, i, arreglo) {
                    var opcion = document.createElement("option");
                    if (
                            elemento.provincia === np
                            && elemento.distrito !== 0
                            && (elemento.seq_distrito === 1)
                            )
                    {
                          var s = elemento;
                        var siguieate = arreglo[i - 1].nombre;

                        opcion.setAttribute("value", String(i - 1));
                        opcion.appendChild(document.createTextNode(arreglo[i - 1].nombre));
                        refMenu.appendChild(opcion);

                    }
                }
        );
    }
}
var datosTotales;
function construirDistritos(datosDistritos, nd, np)
{
    console.log("datos2", datosDistritos);
    console.log("datos1", datosDistritos);
    nd = 1;
    np = 1;
    var refMenu = document.getElementById('MenuDistrito');
    if (refMenu) {
        while (refMenu.options.length) {
            refMenu.options.remove(0);
        }
        datosDistritos.forEach(
                function (elemento, i, arreglo) {
                    var opcion = document.createElement("option");
                    if (
                            elemento.provincia === np
                            && elemento.canton === nd

                            )
                    {
                        opcion.setAttribute("value", String(i + 1));
                        opcion.appendChild(document.createTextNode(elemento.nombre));
                        refMenu.appendChild(opcion);
                    }
                }
        );

    }
}

function filtrarMenuCanton() {
    var refMenu = document.getElementById('MenuCanton');
    var refMenuP = document.getElementById('MenuProvincia');
    if (refMenu) {
        var textoItem = refMenuP.children[refMenuP.selectedIndex].text;
        while (refMenu.options.length) {
            refMenu.options.remove(0);
        }
        datosTotales.forEach(
                function (elemento, i, arreglo) {
                    var opcion = document.createElement("option");
                    var numeroPosicion = refMenuP.children[refMenuP.selectedIndex].value;

                    var can = arreglo[numeroPosicion].canton;
                    var pro = arreglo[numeroPosicion].provincia;
                    if (
                            elemento.provincia === pro
                            && elemento.distrito !== 0
                            && (elemento.seq_distrito === 1)
                            )
                    {
                        var s = elemento;
                        var siguieate = arreglo[i - 1].nombre;
                        opcion.setAttribute("value", String(i - 1));
                        opcion.appendChild(document.createTextNode(arreglo[i - 1].nombre));
                        refMenu.appendChild(opcion);


                    }
                }
        );
    }

    filtrarMenuDistrito();
}

function filtrarMenuDistrito() {
    var refDis = document.getElementById('MenuDistrito');
    var menuProv = document.getElementById('MenuProvincia');
    var refMenuCant = document.getElementById('MenuCanton');
    

    if (refDis) {
        var textoItem = refMenuCant.children[refMenuCant.selectedIndex].text;
        while (refDis.options.length) {
            refDis.options.remove(0);
        }
        datosTotales.forEach(
                function (elemento, i, arreglo) {
                    var opcion = document.createElement("option");
                    var numeroPosicionC = refMenuCant.children[refMenuCant.selectedIndex].value;
                    var numeroPosicion = menuProv.children[menuProv.selectedIndex].value;
                    var can = arreglo[numeroPosicionC].canton;
                    var pro = arreglo[numeroPosicion].provincia;
                    if (
                            elemento.provincia === pro
                            && elemento.canton === can
                            && elemento.distrito !== 0
                            && elemento.seq_distrito !== arreglo[i - 1].seq_distrito
                            )
                    {
                        var s = elemento;
                        opcion.setAttribute("value", String(i));
                        opcion.appendChild(document.createTextNode(elemento.nombre));
                        refDis.appendChild(opcion);
                    }
                }
        );

    }

    calcularCodigo();
//    var numeroPosicionCanton=datosTotales[refMenuCant.children[refMenuCant.selectedIndex].value].canton;
//    var numeroPosicionDistrito=datosTotales[refDis.children[refDis.selectedIndex].value].distrito;
//    var numeroPosicionProvincia=datosTotales[menuProv.children[menuProv.selectedIndex].value].provincia;
//    console.log("Codigo : ",numeroPosicionProvincia,numeroPosicionCanton,numeroPosicionDistrito);
}

function calcularCodigo()
{
    var refDis = document.getElementById('MenuDistrito');
    var menuProv = document.getElementById('MenuProvincia');
    var refMenuCant = document.getElementById('MenuCanton');
    var numeroPosicionCanton = datosTotales[refMenuCant.children[refMenuCant.selectedIndex].value].canton;
    var numeroPosicionDistrito = datosTotales[refDis.children[refDis.selectedIndex].value].seq_distrito;
    var numeroPosicionProvincia = datosTotales[menuProv.children[menuProv.selectedIndex].value].provincia;
    p = numeroPosicionProvincia;
    ca = numeroPosicionCanton;
    d = numeroPosicionDistrito;

    var a, b, c;

    a = p;
    if (ca.length >= 10)
    {
        b = ca;
    } else
    {
        b = "0" + ca;
    }
    if (d.length >= 10)
    {
        c = d;
    } else
    {
        c = "0" + d;
    }
    console.log(a, b, c);
    var refCodigo = document.getElementById("codigo");
    if (refCodigo)
    {

        refCodigo.textContent = a + b + c;
    }

}

function ejemplo()
{
    var refDis = document.getElementById('MenuDistrito');
    var menuProv = document.getElementById('MenuProvincia');
    var refMenuCant = document.getElementById('MenuCanton');
    var numeroPosicionCanton = datosTotales[refMenuCant.children[refMenuCant.selectedIndex].value].canton;
    var numeroPosicionDistrito = datosTotales[refDis.children[refDis.selectedIndex].value].seq_distrito;
    var numeroPosicionProvincia = datosTotales[menuProv.children[menuProv.selectedIndex].value].provincia;
    p = numeroPosicionProvincia;
    ca = numeroPosicionCanton;
    d = numeroPosicionDistrito;

    var a, b, c;

    a = p;
    if (ca.length >= 10)
    {
        b = ca;
    } else
    {
        b = "0" + ca;
    }
    if (d.length >= 10)
    {
        c = d;
    } else
    {
        c = "0" + d;
    }
    console.log(a, b, c);
}
