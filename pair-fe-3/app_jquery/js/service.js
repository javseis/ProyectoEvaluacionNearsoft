"use strict";

function obtenerImagenRandom() {
    $.ajax({
        "url": URL_IMG_RANDOM,
        "headers": {
            "api_key": "g00dLuCk"
        },
        "dataType": "json",
        "success": function (response) {
            if (response && response.image) {
                $("#cat").attr("src", response.image.url);
                $("#like").data("id-cat", response.image.id);
            }
        }
    });
}

function agregarFavorito(id) {
    if (id) {
        $.ajax({
            "url": URL_API_FAVS + "/" + id,
            "method": "POST",
            "headers": {
                "api_key": "g00dLuCk"
            },
            "dataType": "json",
            "success": function (response) {
                if (response && response.image) {
                    console.log(response.image.id);
                }
            }
        });
    }
}

function eliminarFavorito(id) {
    if (id) {
        $.ajax({
            "url": URL_API_FAVS + "/" + id,
            "method": "DELETE",
            "headers": {
                "api_key": "g00dLuCk"
            }
        })
        .done(function(){
            $(".favs").empty();
            setTimeout(function () {
                obtenerFavoritos();
            }, 100);
        });
    }
}

function obtenerFavoritos() {
    $.ajax({
        "url": URL_API_FAVS,
        "method": "GET",
        "headers": {
            "api_key": "g00dLuCk"
        },
        "dataType": "json",
        "success": function (response) {
            if (response && response.images) {
                console.log(response.images);
                response.images.forEach(function (image) {
                    var imageHtml = $(FAV_TEMPLATE);

                    imageHtml.find("img").attr("src", image.url);
                    imageHtml.find("a").data("id-cat", image.id);
                    $(".favs").append(imageHtml);
                });
            }
        }
    });
}