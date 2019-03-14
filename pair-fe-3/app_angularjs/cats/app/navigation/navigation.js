"use strict";

angular.module("appNavigation", [])
    .directive("navLink", ["$document", function ($document) {
        function link(scope, element, attrs) {
            var esDefault = attrs.isDefault === "true";

            if (esDefault) {
                element.children().addClass("active");
            }

            element.on("click", function () {
                angular.element($document).find("nav-link").children().removeClass("active");
                element.children().addClass("active");
            });
        }

        return {
            link: link,
            templateUrl: "/navigation/navLink.html",
            scope: {
                url: "@",
                text: "@",
                isDefault: "@"
            }
        };
    }]);