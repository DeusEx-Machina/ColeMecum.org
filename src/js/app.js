// /**
//  * Created by TheTower on 7/22/2015.
//  */
// 'use strict';
//
// var myApp = angular.module('myApp', ['ngRoute']);
//
// myApp.config(['$routeProvider', function ($routeProvider) {
//         $routeProvider.
//         when('#/', {templateUrl: 'partials/battleCalc.html', controller: 'battleCalc'}).
//         when('/angular-js', {templateUrl: "partials/angular-js.html", controller: 'todoCtrl'}).
//         when('/aboutme', {templateUrl: "partials/aboutme.html", controller: 'viewCtrl'}).
//         when('/python', {templateUrl: "partials/python.html", controller: 'viewCtrl'}).
//         when('/Java', {templateUrl: "partials/java.html", controller: 'viewCtrl'}).
//         when('/websiteList', {templateUrl: "partials/websiteList.html", controller: 'viewCtrl'}).
//         otherwise({templateUrl: "partials/battleCalc.html", controller: 'battleCalc'})
//     }])
//
//     //view controller
//     .controller('viewCtrl', ['$scope', '$location', '$log',
//         function ($scope, $location, $log) {
//             $log.info($location.path());
//         }]);
//
//
// //controller for the To-do widget view
// myApp.controller('todoCtrl', ['$scope', function ($scope) {
//     $scope.getTotalTodos = function () {
//         return $scope.todos.length
//     };
//
//     $scope.todos = [
//         {text: "make a website", done: true},
//         {text: 'Learn AngularJS', done: true},
//         {text: 'build an app', done: true},
//         {text: "make money off said app", done: false}];
//
//     $scope.addTodo = function () {
//         $scope.todos.push({text: $scope.formTodoText, done: false});
//         $scope.formTodoText = '';
//     };
//
//     $scope.clearCompleted = function () {
//         //todo either implement underscore or make a custom filter function
//         var newTodo = [];
//         for (var i = 0; i < $scope.todos.length; i++) {
//             if (!$scope.todos[i].done)
//                 newTodo.push($scope.todos[i]);
//         }
//     }
// }]);
//
// myApp.controller('finance', ['$scope',  function ($scope) {
//     $scope.monthlyIncome = 0;
//
//     $scope.budget = [{item: 'Housing', allowance: 500, spending: 500}]; //array of budget fields that will go like {field: 'food', allowance: 10, actual: 15;}
//     //returns true if you're within your limit for the month
//
//     $scope.overUnder = function (item) {
//         return item['allowance'] >= item['spending'];
//     };
//
//     //calculates what percentage of your income you spent on a certain item
//     $scope.percentage = function (item) {
//         return item['spending'] / $scope.monthlyIncome;
//     }
// }]);
//
// myApp.controller('battleCalc', ['$scope', '$http', function ($scope, $http) {
//     //http://klingon.angeldsis.com/usyn/index/fetchtech?playerid=0932
//     // returns {"data":{"armor":24,"laser":23,"missile":21,"plasma":15,"shield":14,"ion":13,"photon":8,"disruptor":3},"nick":"rabbit"}
//     $scope.getPlayerTech = function(playerID){
//         $http({
//             method:'POST',
//             url: 'proxy.php',
//             data:{
//                 address: 'http://klingon.angeldsis.com/usyn/index/fetchtech?playerid=932'
//             }
//         }).then(function success(response){
//             console.log(response)
//
//         }, function error(response){
//             console.log('Error in getting response : ', response);
//         })
//     };
//
//
//     $scope.attacker = {
//         id: 932,
//
//         fleet:{
//             fighter: 1000,
//             frigate: 250
//         },
//
//         tech: {
//             Armor: {name:'Armor', level:0},
//             Laser: {name:'Laser', level:0},
//             Missiles:{ name:'Missiles', level:0},
//             Plasma:{ name:'Plasma', level:0},
//             Shielding:{ name:'Shielding', level:0},
//             Ion:{ name:'Ion', level:0},
//             Photon:{ name:'Photon', level:0},
//             Disruptor:{ name:'Disruptor', level:0},
//             CommandCenter:{ name:'Command Center', level:0},
//             TacticalCommander:{ name:'Tactical Commander', level:0}
//         },
//
//     }
//
//     $scope.defender = {
//
//         tech: {
//             Armor: {name:'Armor', level:0},
//             Laser: {name:'Laser', level:0},
//             Missiles:{ name:'Missiles', level:0},
//             Plasma:{ name:'Plasma', level:0},
//             Shielding:{ name:'Shielding', level:0},
//             Ion:{ name:'Ion', level:0},
//             Photon:{ name:'Photon', level:0},
//             Disruptor:{ name:'Disruptor', level:0},
//             CommandCenter:{ name:'Command Center', level:0},
//             TacticalCommander:{ name:'Tactical Commander', level:0}
//         },
//
//     }
//
//     $scope.unitBaseValues = {
//         fighter: {
//             name: 'Fighter',
//             key:'fighter',
//             size: 5,
//             x: 1,
//             armor: 2,
//             power: 2,
//             shield: 0
//         },
//         bomber: {
//             name: 'Bomber',
//             size: 10,
//             x: 2,
//             power: 4,
//             armor: 2,
//             shield: 0
//         },
//         heavyBomber: {
//             name: 'Heavy Bomber',
//             size: 30,
//             x: 3,
//             power: 10,
//             armor: 4,
//             shield: 0
//         },
//         ionBomber: {
//             name: 'Ion Bomber',
//             size: 60,
//             x: 5,
//             power: 12,
//             armor: 4,
//             shield: 1
//         },
//         corvette: {
//             name: 'Corvette',
//             size: 20,
//             x: 1,
//             power: 4,
//             armor: 4,
//             shield: 0
//         },
//         recycler: {
//             name: 'Recycler',
//             size: 30,
//             x: 1,
//             power: 2,
//             armor: 2,
//             shield: 0
//         },
//         destroyer: {
//             name: 'Destroyer',
//             size: 40,
//             x: 3,
//             power: 8,
//             armor: 8,
//             shield: 0
//         }
//         ,
//         frigate: {
//             name: 'Frigate',
//             size: 80,
//             x: 2,
//             power: 12,
//             armor: 12,
//             shield: 0
//         }
//         ,
//         ionFrigate: {
//             name: 'Ion Frigate',
//             size: 120,
//             x: 5,
//             power: 14,
//             armor: 12,
//             shield: 1
//         },
//         scoutShip: {
//             name: 'Scout Ship',
//             size: 40,
//             x: 1,
//             power: 1,
//             armor: 2,
//             shield: 0
//         }
//         ,
//         outpostShip: {
//             name: 'Outpost Ship',
//             size: 100,
//             x: 1,
//             power: 2,
//             armor: 4,
//             shield: 0
//         }
//         ,
//         cruiser: {
//             name: 'Cruiser',
//             size: 200,
//             x: 3,
//             power: 24,
//             armor: 24,
//             shield: 2
//         }
//         ,
//         carrier: {
//             name: 'Carrier',
//             size: 400,
//             x: 2,
//             power: 12,
//             armor: 24,
//             shield: 2
//         }
//         ,
//         heavyCruiser: {
//             name: 'Heavy Cruiser',
//             size: 500,
//             x: 3,
//             power: 48,
//             armor: 48,
//             shield: 4
//         }
//         ,
//         battleship: {
//             name: 'Battleship',
//             size: 2000,
//             x: 5,
//             power: 168,
//             armor: 128,
//             shield: 10
//         }
//         ,
//         fleetCarrier: {
//             name: 'Fleet Carrier',
//             size: 2500,
//             x: 5,
//             power: 64,
//             armor: 96,
//             shield: 8
//         },
//         dreadnought: {
//             name: 'Dreadnought',
//             size: 10000,
//             x: 6,
//             power: 756,
//             armor: 512,
//             shield: 20
//         }
//         ,
//         titan: {
//             name: 'Titan',
//             size: 50000,
//             x: 7,
//             power: 3402,
//             armor: 2048,
//             shield: 30
//         }
//         ,
//         leviathan: {
//             name: 'Leviathan',
//             size: 200000,
//             x: 6,
//             power: 10000,
//             armor: 6600,
//             shield: 40
//         }
//         ,
//         deathStar: {
//             name: 'Death Star',
//             size: 500000,
//             x: 7,
//             power: 25500,
//             armor: 13500,
//             shield: 60
//         }
//     };
//
//     $scope.defenseBaseValues = {
//         barracks: {
//             size:0,
//             x:1,
//             power:4,
//             armor:4,
//             shield:0
//         },
//         laserTurret:{
//             size:0,
//             x:1,
//             power:8,
//             armor:8,
//             shield:0
//         },
//         missileTurret:{
//             size:0,
//             x:2,
//             power:16,
//             armor:16,
//             shield:0
//         },
//         plasmaTurret:{
//             size:0,
//             x:3,
//             power:24,
//             armor:24,
//             shield:0
//         },
//         ionTurret:{
//             size:0,
//             x:5,
//             power:32,
//             armor:32,
//             shield:2
//         },
//         photonTurret:{
//             size:0,
//             x:6,
//             power:64,
//             armor:64,
//             shield:6
//         },
//         disruptorTurret:{
//             size:0,
//             x:7,
//             power:256,
//             armor:256,
//             shield:8
//         },
//         deflectionShields:{
//             size:0,
//             x:5,
//             power:2,
//             armor:512,
//             shield:16
//         },
//         planetaryShield:{
//             size:0,
//             x:5,
//             power:4,
//             armor:2048,
//             shield:20
//         },
//         planetaryRing:{
//             size:0,
//             x:6,
//             power:2048,
//             armor:1024,
//             shield:12
//         }
//     };
//
//     $scope.calcMultiplier = function(tech){
//         return tech.level * 5 + "%";
//     }
//
//     $scope.getPowerArmorShield = function(unit){
//
//     }
// }]);
//
// //
// //angular.module('2048', []).controller('gameController', function () {
// //    var grid = [
// //        [[4], [], [], []],
// //        [[4], [], [], []],
// //        [[2], [], [], []],
// //        [[], [], [], []]
// //    ];
// //    this.score = 0;
// //
// //    this.getCell = function (cell) {
// //        return grid[cell.y][cell.x];
// //    };
// //
// //    this.setCell = function (cell) {
// //        grid[cell.y][cell.x] = cell.val;
// //    };
// //
// //    this.getScoreVal = function (cell) {
// //        //n is the largest number cell achieved
// //        switch (cell.val) {
// //            case 2:
// //                return 2;
// //            case 4:
// //                return 5;
// //            case 8:
// //                return 10;
// //            case 16:
// //                return 25;
// //            case 32:
// //                return 50;
// //            case 64:
// //                return 125;
// //            case 128:
// //                return 250;
// //            case 256:
// //                return 500;
// //            case 512:
// //                return 1000;
// //            case 1024:
// //                return 2000;
// //            case 2048:
// //                return 4000;
// //            case 4096:
// //                return 8000;
// //            case 8192:
// //                return 16000;
// //            case 16384:
// //                return 32500;
// //            default:
// //                return 0;
// //        }
// //    };
// //
// //    this.addScore = function (cell) {
// //        $scope.score += cell;
// //    };
// //
// //    this.slide = {
// //        up: function () {
// //            for (var y = 0; y < 3; y++) {
// //                for (var x = 0; x < 3; x++) {
// //                    //if they are equal, add them
// //                    if (grid[y][x] == grid[y + 1][x]) {
// //                        grid[y][x] *= 2;
// //                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
// //                    }
// //                    //if cell before is empty slide number down
// //                    else if (grid[y][x] == []) {
// //                        grid[y][x] = grid[y + 1][x];
// //                        grid[y + 1][x] = [];
// //                    }
// //
// //                }
// //            }
// //            return true;
// //        },
// //        down: function () {
// //            for (var y = 3; y > 0; y--) {
// //                for (var x = 0; x < 3; x++) {
// //                    //if they are equal, add them
// //                    if (grid[y][x] == grid[y + 1][x]) {
// //                        grid[y][x] *= 2;
// //                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
// //                    }
// //                    //if cell before is empty slide number down
// //                    else if (grid[y][x] == []) {
// //                        grid[y][x] = grid[y + 1][x];
// //                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
// //                    }
// //
// //                }
// //            }
// //            return true;
// //        },
// //        left: function () {
// //            for (var x = 0; x < 3; x++) {
// //                for (var y = 0; y < 3; y++) {
// //                    //if they are equal, add them
// //                    if (grid[y][x] == grid[y + 1][x]) {
// //                        grid[y][x] *= 2;
// //                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
// //                    }
// //                    //if cell before is empty slide number down
// //                    else if (grid[y][x] == []) {
// //                        grid[y][x] = grid[y + 1][x];
// //                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
// //                    }
// //                }
// //            }
// //            return true;
// //        },
// //        right: function () {
// //            for (var x = 3; x > 0; x--) {
// //                for (var y = 0; y < 3; y++) {
// //                    //if they are equal, add them
// //                    if (grid[y][x] == grid[y + 1][x]) {
// //                        grid[y][x] *= 2;
// //                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
// //                    }
// //                    //if cell before is empty slide number down
// //                    else if (grid[y][x] == []) {
// //                        grid[y][x] = grid[y + 1][x];
// //                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
// //                    }
// //                }
// //            }
// //            return true;
// //        }
// //    };
// //    //need an update board/score function
// //});



/**
 * Created by cole on 4/21/16.
 */
$(window).scroll(function () {
    //current scrolling position
    var wScroll = $(this).scrollTop();
    console.log(wScroll);


    if (wScroll <  $('#section2').offset().top ) {
        $('#section1').css({'top': wScroll});
        $('#section2, #section3').css({'top': -wScroll/2});

        if( !$('header').get(0).classList.contains('navbar-inverse') ){
            $('#header').addClass('navbar-inverse');
        }
    }
    if( wScroll >= 354){
        $('#header').addClass('navbar-default');
        $('#header').removeClass('navbar-inverse');
    }
});