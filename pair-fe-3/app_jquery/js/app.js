"use strict";

function initUI() {
    navegacion(URL_CATS);
    
    $(".nav-button").click(function (event) {
        event.preventDefault();

        var link = $(this);
        var pagina = link.attr("href");

        $(".nav-button").removeClass("active");
        link.addClass("active");

        navegacion(pagina);
    });

    $(document).on("click", ".delete-fav",function(event){
        event.preventDefault();

        var idGatito = $(this).data("id-cat");
        eliminarFavorito(idGatito);        
    });
}

function initUICats(){
    obtenerImagenRandom();
    $("#next").click(function (event) {
        event.preventDefault();

        obtenerImagenRandom();
    });

    $("#like").click(function (event) {
        event.preventDefault();

        var idGatito = $(this).data("id-cat");
        agregarFavorito(idGatito);
        obtenerImagenRandom();
    });
}

function initUIFavs(){    
    obtenerFavoritos();    
}

function navegacion(url) {
    if (url) {
        $.get(url).done(function (content) {
            $(".main").html(content);
        });
    }
}