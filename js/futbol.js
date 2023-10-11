/*sgundo menú*/
$(document).ready(function () {





    //scroll "donde estamos"
    var link_donde_estamos = document.getElementById("link_donde_estamos");
    link_donde_estamos.addEventListener("click",linkAbout,false);

    function linkAbout(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#donde-estamos").offset().top)
        }, 800);
    }





    //reloj dinámico momentjs
    setInterval(function () {
        var reloj = $("#reloj, .date");
        var formato = moment().format("dddd, D MMM YYYY, LTS");
        reloj.html(formato);
    }, 10);




    //menu animado jquery
    var $JqueryMenu = $("#JqueryMenu");
    $JqueryMenu.navPlugin({
        itemWidth: 'auto',
        itemHeight: 30,
        navEffect: 'slide',
        speed: 200
    });






    //categoría active
    let activePage = window.location.pathname; //nombre de la ruta
    // console.log(activePage);
    let divCategory = document.querySelector("#divFutbol");
    let categoryLinks = document.querySelectorAll(".categoria a");
    categoryLinks.forEach(category => {
        // console.log(category.href);
        if(category.href.includes(`${activePage}`)){
            divCategory.classList.add('activeCategory');
        }
    });






    // $("#seccion > ul > li").click(function(){
    //     $("#seccion > ul > li").removeClass("active");
    //     $(this).addClass("active");
    // });




    


    //calculadora

    $("#btn-calcular").click(function () {
        var peso = $("#data-peso").val();
        var alturaCm = $("#data-altura").val();
        var resultadoTexto = $("#result");
        var alturaM = 0;
        var resultado = 0;

        //validamos, calculamos y mostramos
        if (peso != "" && alturaCm != "") {

            //mostramos los resultados
            resultadoTexto.show();

            alturaM = alturaCm / 100;
            resultado = Math.round((1.3 * peso) / (Math.pow(alturaM, 2.5)));

            if (resultado < 18.5) {
                resultadoTexto.html("Bajo peso. Su IMC es " + resultado + ".").css("color", "rgb(253, 231, 0)");
            } else if (resultado >= 18.5 && resultado <= 24.9) {
                resultadoTexto.html("¡¡Genial!! Estás en el peso adecuado. Su IMC es " + resultado + ".").css("color", "#32cd32");
            } else if (resultado >= 25 && resultado <= 29.9) {
                resultadoTexto.html("Sobrepeso. Su IMC es " + resultado + ".").css("color", "#ffb300");
            } else if (resultado >= 30) {
                resultadoTexto.html("Obeso. Su IMC es " + resultado + ".").css("color", "#ff2500");
            }
        } else {
            resultadoTexto.hide();
            alert("Introduce un peso y altura correcto");
        }
    });

    $("#btn-limpiar").click(function () {
        $("#result").hide();
        $("#data-peso").val("");
        $("#data-altura").val("");
    });







    
    //scroll arriba de la web
    var subir = $("#subir");
    subir.click(function(e){
        e.preventDefault(); //para que el botón no haga su función por defecto (reedirigirnos a otra página)

        $("html, body").animate({
            scrollTop: 0 //subir hasta arriba del todo
        }, 800); //tiempo del recorrido
    });







    //selector de temas
    var theme = $("#theme");
    var green = $("#to-green");
    var red = $("#to-red");
    var blue = $("#to-blue");

    green.click(function(){
        theme.attr("href","css/green.css"); //capturamos la hoja de estilos de cada color
    });

    red.click(function(){
        theme.attr("href","css/red.css");
    });

    blue.click(function(){
        theme.attr("href","css/blue.css");
    });



    // plugin menu deslizante
    $("#selector-theme").hover(function(){
		$(this).stop().animate({left:"0px"},400,"easeInSine");//termina animate

	},function(){
		$(this).stop().animate({left:"-38px"},1500,"easeOutBounce");

	});

});