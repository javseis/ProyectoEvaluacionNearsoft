"use strict";

angular.module("myApp.favs", ["ngRoute", "appService"])

  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/favs", {
      templateUrl: "favs/favs.html",
      controller: "favsCtrl"
    });
  }])

  .controller("favsCtrl", ["$scope", "CatasticService", function ($scope, CatasticService) {
    $scope.favoritos = [];

    $scope.recuperarFavoritos = function () {
      CatasticService.obtenerFavoritos().then(function (data) {
        $scope.favoritos = data.images;
      });
    };

    $scope.eliminarFavorito = function (id) {
      CatasticService.eliminarFavorito(id).then(function (correcto) {
        if (correcto) {
          console.info("Se eliminó el elemento: " + id);
          $scope.recuperarFavoritos();
        } else {
          console.error("Ocurrio un error al eliminar el elemento.");
        }
      });
    };

    $scope.recuperarFavoritos();
  }]);