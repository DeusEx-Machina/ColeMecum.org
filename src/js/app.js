/**
 * Created by TheTower on 7/22/2015.
 */
'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        when('#/', {templateUrl: 'partials/websiteList.html', controller: 'viewCtrl'}).
        when('/angular-js', {templateUrl: "partials/angular-js.html", controller: 'todoCtrl'}).
        when('/aboutme', {templateUrl: "partials/aboutme.html", controller: 'viewCtrl'}).
        when('/python', {templateUrl: "partials/python.html", controller: 'viewCtrl'}).
        when('/Java', {templateUrl: "partials/java.html", controller: 'viewCtrl'}).
        when('/websiteList', {templateUrl: "partials/websiteList.html", controller: 'viewCtrl'}).
        otherwise({templateUrl: "partials/error.html", controller: 'viewCtrl'})
    }])

    //view controller
    .controller('viewCtrl', ['$scope', '$location', '$log',
        function ($scope, $location, $log) {
            $log.info($location.path());
        }]);


//controller for the To-do widget view
myApp.controller('todoCtrl', ['$scope', function ($scope) {
    $scope.getTotalTodos = function () {
        return $scope.todos.length
    };

    $scope.todos = [
        {text: "make a website", done: true},
        {text: 'Learn AngularJS', done: true},
        {text: 'build an app', done: true},
        {text: "make money off said app", done: false}];

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.formTodoText, done: false});
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function () {
        //todo either implement underscore or make a custom filter function
        var newTodo = [];
        for (var i = 0; i < $scope.todos.length; i++) {
            if (!$scope.todos[i].done)
                newTodo.push($scope.todos[i]);
        }
    }
}]);

myApp.controller('finance', ['$scope', function($scope){
    $scope.monthlyIncome = 0;

    $scope.budget = [{item:'Housing', allowance:500, spending: 500}]; //array of budget fields that will go like {field: 'food', allowance: 10, actual: 15;}
    //returns true if you're within your limit for the month

    $scope.overUnder = function(item){
        return item['allowance'] >= item['spending'];
    };

    //calculates what percentage of your income you spent on a certain item
    $scope.percentage = function(item){
        return item['spending'] /$scope.monthlyIncome;
    }


}]);