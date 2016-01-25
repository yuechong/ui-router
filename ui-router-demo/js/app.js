/**
*  Module
*
* Description
*/
var app =  angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$stateProvider
    .state('index', {
      url: "",
      /*views: {
        "viewA": { template: "index.viewA" },
        "viewB": { template: "index.viewB" }
      }*/
      views: {
        "viewTop": { templateUrl: "tpls/viewTop.html" },
        "viewB": { templateUrl: "tpls/index.viewB.html" }
      }
    })
    .state('route1', {
      url: "/route1",
      views: {
        "viewA": { template: "route1.viewA" },
        "viewB": { template: "route1.viewB" }
      }
    })
    .state('route2', {
      url: "/route2",
      views: {
        "viewA": { template: "route2.viewA" },
        "viewB": { template: "route2.viewB" }
      }
    });
}]);
