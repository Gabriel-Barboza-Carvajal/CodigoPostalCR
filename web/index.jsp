<%-- 
    Document   : index.jsp
    Created on : 15-may-2020, 0:10:29
    Author     : Gabriel Barboza Carvajal.
    Horario    : 6:00pm.
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="shortcut icon" href="2.png">
        <script src="newjavascript.js" type="text/javascript"></script>
        <link href="default.css" rel="stylesheet" type="text/css"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Tarea 3</title>
    </head>
    <body>

        <div id="wrapper">
            <header></header>
            <div id="contents">
                <div id="menu">
                    <section>
                        <p><strong><h2>Menú para Código Postal</h2></strong></p>
                        <p style="font-size: 20px;"><strong>Provincia : </strong></p>
                        <select id="MenuProvincia" onchange="filtrarMenuCanton()">

                        </select>
                        <p style="font-size: 20px;"><strong>Canton : </strong></p>
                        <select id="MenuCanton" onchange="filtrarMenuDistrito()" >

                        </select>
                        <p style="font-size: 20px;"><strong>Distrito : </strong></p>
                        <select id="MenuDistrito" onchange="calcularCodigo()">

                        </select>
                    </section>
                </div>
                <div id="MostrarCodigo">
                    <p >
                        <strong>El Codigo es:</strong>
                        <strong><span id="codigo">(No hay ninguna opción seleccionada)</span></strong>
                    </p>
                </div>               
            </div>
            <footer>
                
            </footer>
        </div>
    </body>
</html>
