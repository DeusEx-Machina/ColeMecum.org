var demo = angular.module('angularDemo', ['ngRoute'])
	.config([
		        '$routeProvider', function ($routeProvider) {
			$routeProvider.when('#/', {
				templateUrl: 'battleCalc/battleCalc.html',
				controller: 'battleCalcCtrl'
			}).when('/battleCalc', {
				templateUrl: "battleCalc/battleCalc.html",
				controller: 'battleCalcCtrl'
			}).when('/todo', {
				templateUrl: "todo/todo.html",
				controller: 'todoCtrl'
			}).when('/2048', {
				templateUrl: "2048/2048.html",
				controller: 'twentyCtrl'
			}).when('/budget', {
				templateUrl: "budget/budget.html",
				controller: 'budgetCtrl'
			}).otherwise({templateUrl: "battleCalc/battleCalc.html", controller: 'battleCalc'})
		}
	]);