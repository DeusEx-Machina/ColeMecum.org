/**
 * Created by TheTower on 7/22/2015.
 */
'use strict';

var myApp = angular.module('myApp',['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/',{templateUrl: 'partials/blog.html', controller:'viewCtrl'}).
            when('/angular-js',{templateUrl: "partials/angular-js.html", controller:'todoCtrl'}).
            when('/aboutme',{templateUrl: "/partials/aboutme.html", controller:'viewCtrl'}).
            when('/python',{templateUrl: "/partials/python.html", controller:'viewCtrl'}).
            when('/Java',{templateUrl: "/partials/java.html", controller:'viewCtrl'}).
            when('/websiteList',{templateUrl: "/partials/websiteList.html", controller:'viewCtrl'}).
            otherwise({templateUrl: "/partials/error.html", controller:'viewCtrl'})
    }])

//view controller

.controller('viewCtrl',['$scope','$location','$log',
        function($scope, $location,$log){
            $log.info($location.path());
}]);




//controller for the todo part of the angular page
myApp.controller('todoCtrl', ['$scope', function($scope){
    $scope.getTotalTodos = function(){
        return $scope.todos.length
    }

    $scope.todos = [
        {text:"make a website", done:true},
        {text:'Learn AngularJS', done:true},
        {text:'build an app', done:true},
        {text:"make money off said app", done:false}]

    $scope.addTodo = function(){

        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText ='';
    }

    $scope.clearCompleted = function(){
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        })
    }
}]);