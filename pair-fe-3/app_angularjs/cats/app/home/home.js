"use strict";

angular.module("myApp.home", ["ngRoute", "appService"])

  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home", {
      templateUrl: "home/home.html",
      controller: "homeCtrl"
    });
  }])

  .controller("homeCtrl", ["$scope", "CatasticService", function ($scope, CatasticService) {
    $scope.gatito = {};
    $scope.obtenerGatito = function () {
      console.log("invca CatasticService.obtenerImagen()");
      CatasticService.obtenerImagen().then(function (data) {
        $scope.gatito = data.image;
      });
    };

    $scope.evtSiguiente = function () {
      $scope.obtenerGatito();
    };

    $scope.evtAgregarFavorito = function (id) {
      CatasticService.agregarFavorito(id);
      $scope.obtenerGatito();
    };

    $scope.obtenerGatito();
  }]);