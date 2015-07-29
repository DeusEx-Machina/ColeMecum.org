/**
 * Created by TheTower on 7/22/2015.
 */
'use strict';

var myApp = angular.module('myApp',['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/',{templateUrl: 'partials/blog.html', controller:'viewCtrl'}).
            when('/angular-js',{templateUrl: "partials/angular-js.html", controller:'todoCtrl'}).
            when('/aboutme',{templateUrl: "partials/aboutme.html", controller:'viewCtrl'}).
            when('/python',{templateUrl: "partials/python.html", controller:'viewCtrl'}).
            when('/Java',{templateUrl: "partials/java.html", controller:'viewCtrl'}).
            when('/websiteList',{templateUrl: "partials/websiteList.html", controller:'viewCtrl'}).
            otherwise({templateUrl: "partials/error.html", controller:'viewCtrl'})
    }])

//view controller

.controller('viewCtrl',['$scope','$location','$log',
        function($scope, $location,$log){
            $log.info($location.path());
}]);




//controller for the ANGULARJS view
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
        //todo either implement underscore or make a custom filter function
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        })
    }



    $scope.x = getUserLoc();
    function getUserLoc(){
        var userPos = {};
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){userPos.lat = position.coords.latitude, userPos.long = position.coords.longitude});
        }else{
            //fire something that calls the whole thing off
            console.log("They're using an older browser")
        }
        return userPos;
    };

    function initialize() {
        console.log("adsfa")
        var mapOptions = {
            center: { lat: -34.397, lng: 150.644},
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
}]);

//putting this on hold for now. Just going to use vanilla js to get it working and then move it to angular
/*

myApp.controller('googleMaps',['$scope', function($scope){
    $scope.userPos = {}

    $scope.radioshacks = {}

    $scope.findShortest = function(){};

    $scope.getLocation = function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){$scope.userPos.lat = position.coords.latitude, $scope.userPos.long = position.coords.longitude});
        }else{
            //fire something that calls the whole thing off
            console.log("They're using an older browser")
        }
    };


}])



//initialize the map... not sure if it should go in with the html or here
function initMap(){
    var mapOptions = {
        zoom:4,
        center: new google.maps.LatLng(-33,151),
        disableDefaultUI: true
    }
    var map = new google.maps.Map($('#map-canvas'), mapOptions)
};

    */