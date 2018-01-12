"use strict";
angular.module("newProjectApp", ["oauth", "ngRoute"]).config(["$routeProvider", function(a) {
    a.when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
    }).otherwise({
        redirectTo: "/"
    })
}]), angular.module("newProjectApp").controller("MainCtrl", ["$scope", "$timeout", "AccessToken", function(a) {
    a.$on("oauth:login", function(b, c) {
        console.log("yo"), a.accessToken = c.access_token
    }), a.$on("oauth:logout", function() {
        a.accessToken = null
    })
}]);