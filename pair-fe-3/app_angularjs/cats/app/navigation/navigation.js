"use strict";

angular.module("appNavigation", [])
    .directive("navLink", ["$rootScope", function ($rootScope) {
        function link(scope, element) {
            $rootScope.$watch("selectedLink", function () {
                scope.isSelected = $rootScope.selectedLink === element.attr("id");
            });

            element.on("click", function () {
                $rootScope.selectedLink = element.attr("id");
            });
        }

        return {
            link: link,
            templateUrl: "/navigation/navLink.html",
            scope: {
                url: "@",
                text: "@"
            }
        };
    }]);