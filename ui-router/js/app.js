/**
*  Module
*
* Description
*/
var app =  angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/hello');
	$stateProvider
	.state('index',{
		url:'',
		views:{
			"viewA":{ templateUrl:"index.viewA"},
			"viewB":{ templateUrl:"index.viewB"}
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

app.controller('helloListCtr', ['$scope', function($scope){
	$scope.things=["A","Set","Of","Things"];
}]);

app.controller('loginListCtr', ['$scope', function($scope){
	
}]);