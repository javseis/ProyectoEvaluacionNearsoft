"use strict";

angular.module("appService", [])
    .service("CatasticService", ["$http", function ($http) {
        var API_HOST = "http://localhost:8080/api/images";
        var API_HOST_FAV = API_HOST + "/fav";
        
        var servicio = {
            obtenerImagen: function () {
                return $http.get(API_HOST, {
                    headers: { api_key: "g00dLuCk" }
                }).then(function (response) {
                    return response.data;
                });
            },
            agregarFavorito: function (idCat) {
                return $http.post(API_HOST_FAV + "/" + idCat, {}, {
                    headers: {
                        api_key: "g00dLuCk"
                    }
                }).then(function (response) {
                    return response.data;
                });
            },
            obtenerFavoritos: function () {
                return $http.get(API_HOST_FAV, {
                    headers: {
                        api_key: "g00dLuCk"
                    }
                }).then(function (response) {
                    return response.data;
                });
            },
            eliminarFavorito: function (idCat) {
                return $http.delete(API_HOST_FAV + "/" + idCat, {
                    headers: {
                        api_key: "g00dLuCk"
                    },
                    method: "DELETE"
                }).then(function (response) {
                    return response.status === 200;
                });
            }
        };

        return servicio;
    }]);