/**
 * Created by TheTower on 7/22/2015.
 */
'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        when('/', {templateUrl: 'partials/websiteList.html', controller: 'viewCtrl'}).
        //when('/blog', {templateUrl: 'partials/blog.html'} controller)
        when('/battleCalc', {templateUrl: 'partials/battleCalc.html', controller: 'battleCalc'}).
        when('/angular-js', {templateUrl: "partials/angular-js.html", controller: 'todoCtrl'}).
        when('/aboutme', {templateUrl: "partials/aboutme.html", controller: 'viewCtrl'}).
        when('/python', {templateUrl: "partials/python.html", controller: 'viewCtrl'}).
        when('/Java', {templateUrl: "partials/java.html", controller: 'viewCtrl'}).
        when('/websiteList', {templateUrl: "partials/websiteList.html", controller: 'viewCtrl'}).
        otherwise({templateUrl: "partials/error.html", controller: 'battleCalc'})
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

myApp.controller('finance', ['$scope', function ($scope) {
    $scope.monthlyIncome = 0;

    $scope.budget = [{item: 'Housing', allowance: 500, spending: 500}]; //array of budget fields that will go like {field: 'food', allowance: 10, actual: 15;}
    //returns true if you're within your limit for the month

    $scope.overUnder = function (item) {
        return item['allowance'] >= item['spending'];
    };

    //calculates what percentage of your income you spent on a certain item
    $scope.percentage = function (item) {
        return item['spending'] / $scope.monthlyIncome;
    }
}]);

myApp.controller('battleCalc', ['$scope', '$http', function ($scope, $http) {
    //http://klingon.angeldsis.com/usyn/index/fetchtech?playerid=0932
    // returns {"data":{"armor":24,"laser":23,"missile":21,"plasma":15,"shield":14,"ion":13,"photon":8,"disruptor":3},"nick":"rabbit"}
    $scope.getPlayerTech = function () {
        $http({
            method: 'GET',
            url: 'http://klingon.angeldsis.com/usyn/index/login_check',
            headers:{
                "Access-Control-Allow-Origin": 'http://klingon.angeldsis.com',
                'Cookie': 'usyn=7hk433652j41l72q90pmjutak2'
            }
        }).then(function success(response) {
            console.log(response)

        }, function error(response) {
            console.log('Error in getting response : ', response);
        })
    };

    $scope.attacker = {
        id: 0,
        level: 0,
        fleet: {
            fighter: 1000,
            frigate: 250
        },

        tech: {
            Armor: {name: 'Armor', level: 0, modifier: 1.00},
            Laser: {name: 'Laser', level: 0, modifier: 1.00},
            Missiles: {name: 'Missiles', level: 0, modifier: 1.00},
            Plasma: {name: 'Plasma', level: 0, modifier: 1.00},
            Shielding: {name: 'Shielding', level: 0, modifier: 1.00},
            Ion: {name: 'Ion', level: 0, modifier: 1.00},
            Photon: {name: 'Photon', level: 0, modifier: 1.00},
            Disruptor: {name: 'Disruptor', level: 0, modifier: 1.00},
            CommandCenter: {name: 'Command Center', level: 0, modifier: 1.00},
            TacticalCommander: {name: 'Tactical Commander', level: 0, modifier: 1.00}
        },

    };

    $scope.defender = {
        id: 0,
        level: 0,
        fleet: {},

        tech: {
            Armor: {name: 'Armor', level: 0, modifier: 1.00},
            Laser: {name: 'Laser', level: 0, modifier: 1.00},
            Missiles: {name: 'Missiles', level: 0, modifier: 1.00},
            Plasma: {name: 'Plasma', level: 0, modifier: 1.00},
            Shielding: {name: 'Shielding', level: 0, modifier: 1.00},
            Ion: {name: 'Ion', level: 0, modifier: 1.00},
            Photon: {name: 'Photon', level: 0, modifier: 1.00},
            Disruptor: {name: 'Disruptor', level: 0, modifier: 1.00},
            CommandCenter: {name: 'Command Center', level: 0, modifier: 1.00},
            TacticalCommander: {name: 'Tactical Commander', level: 0, modifier: 1.00}
        },

    }

    $scope.results = {
        remainingAtkFleet : {},
        remainingDefFleet : {},
        attackerXP : 0,
        defenderXP: 0,
        attackerLosses:0,
        defenderLosses:0
    };

    $scope.unitBaseValues = {
        fighter: {
            name: 'Fighter',
            tech: 'Laser',
            size: 5,
            x: 1,
            armor: 2,
            power: 2,
            shield: 0,
        },
        bomber: {
            name: 'Bomber',
            tech: 'Missiles',
            size: 10,
            x: 2,
            power: 4,
            armor: 2,
            shield: 0
        },
        heavyBomber: {
            name: 'Heavy Bomber',
            tech: 'Plasma',
            size: 30,
            x: 3,
            power: 10,
            armor: 4,
            shield: 0
        },
        ionBomber: {
            name: 'Ion Bomber',
            tech: 'Ion',
            size: 60,
            x: 5,
            power: 12,
            armor: 4,
            shield: 1
        },
        corvette: {
            name: 'Corvette',
            tech: 'Laser',
            size: 20,
            x: 1,
            power: 4,
            armor: 4,
            shield: 0
        },
        recycler: {
            name: 'Recycler',
            tech: 'Laser',
            size: 30,
            x: 1,
            power: 2,
            armor: 2,
            shield: 0
        },
        destroyer: {
            name: 'Destroyer',
            tech: 'Plasma',
            size: 40,
            x: 3,
            power: 8,
            armor: 8,
            shield: 0
        },
        frigate: {
            name: 'Frigate',
            tech: 'Missiles',
            size: 80,
            x: 2,
            power: 12,
            armor: 12,
            shield: 0
        },
        ionFrigate: {
            name: 'Ion Frigate',
            tech: 'Ion',
            size: 120,
            x: 5,
            power: 14,
            armor: 12,
            shield: 1
        },
        scoutShip: {
            name: 'Scout Ship',
            tech: 'Laser',
            size: 40,
            x: 1,
            power: 1,
            armor: 2,
            shield: 0
        }
        ,
        outpostShip: {
            name: 'Outpost Ship',
            tech: 'Laser',
            size: 100,
            x: 1,
            power: 2,
            armor: 4,
            shield: 0
        }
        ,
        cruiser: {
            name: 'Cruiser',
            tech: 'Plasma',
            size: 200,
            x: 3,
            power: 24,
            armor: 24,
            shield: 2
        }
        ,
        carrier: {
            name: 'Carrier',
            tech: 'Missiles',
            size: 400,
            x: 2,
            power: 12,
            armor: 24,
            shield: 2
        },
        heavyCruiser: {
            name: 'Heavy Cruiser',
            tech: 'Plasma',
            size: 500,
            x: 3,
            power: 48,
            armor: 48,
            shield: 4
        },
        battleship: {
            name: 'Battleship',
            tech: 'Ion',
            size: 2000,
            x: 5,
            power: 168,
            armor: 128,
            shield: 10
        }
        ,
        fleetCarrier: {
            name: 'Fleet Carrier',
            tech: 'Ion',
            size: 2500,
            x: 5,
            power: 64,
            armor: 96,
            shield: 8
        },
        dreadnought: {
            name: 'Dreadnought',
            tech: 'Photon',
            size: 10000,
            x: 6,
            power: 756,
            armor: 512,
            shield: 20
        }
        ,
        titan: {
            name: 'Titan',
            tech: 'Disruptor',
            size: 50000,
            x: 7,
            power: 3402,
            armor: 2048,
            shield: 30
        }
        ,
        leviathan: {
            name: 'Leviathan',
            tech: 'Photon',
            size: 200000,
            x: 6,
            power: 10000,
            armor: 6600,
            shield: 40
        }
        ,
        deathStar: {
            name: 'Death Star',
            tech: 'Disruptor',
            size: 500000,
            x: 7,
            power: 25500,
            armor: 13500,
            shield: 60
        }
    };

    $scope.defenseBaseValues = {
        barracks: {
            name:'Barracks',
            size: 0,
            tech: 'Laser',
            x: 1,
            power: 4,
            armor: 4,
            shield: 0
        },
        laserTurret: {
            name:'Laser Turret',
            size: 0,
            tech: 'Laser',
            x: 1,
            power: 8,
            armor: 8,
            shield: 0
        },
        missileTurret: {
            name:'Missile Turret',
            size: 0,
            tech: 'Missiles',
            x: 2,
            power: 16,
            armor: 16,
            shield: 0
        },
        plasmaTurret: {
            name:'Plasma Turret',
            tech: 'Plasma',
            size: 0,
            x: 3,
            power: 24,
            armor: 24,
            shield: 0
        },
        ionTurret: {
            name:'Ion Turret',
            tech: 'Ion',
            size: 0,
            x: 5,
            power: 32,
            armor: 32,
            shield: 2
        },
        photonTurret: {
            name:'Photon Turret',
            tech: 'Photon',
            size: 0,
            x: 6,
            power: 64,
            armor: 64,
            shield: 6
        },
        disruptorTurret: {
            tech: 'Disruptor',
            name:'Disruptor Turret',
            size: 0,
            x: 7,
            power: 256,
            armor: 256,
            shield: 8
        },
        deflectionShields: {
            name:'Deflection Shields',
            tech: 'Ion',
            size: 0,
            x: 5,
            power: 2,
            armor: 512,
            shield: 16
        },
        planetaryShield: {
            name:'Planetary Shield',
            tech: 'Ion',
            size: 0,
            x: 5,
            power: 4,
            armor: 2048,
            shield: 20
        },
        planetaryRing: {
            name:'P-Ring',
            tech: 'Photon',
            size: 0,
            x: 6,
            power: 2048,
            armor: 1024,
            shield: 12
        }
    };

    $scope.calcMultiplier = function (tech) {
        tech.modifier = 1 + (tech.level * .05);
        return tech.level * 5 + "%";
    };


    $scope.calcDamagePerUnit = function (attackPwr, defShield, crossShields) {
        var damageThroughShields = attackPwr * crossShields;
        if (attackPwr > defShield) {
            return attackPwr - defShield + damageThroughShields;
        }
        else {
            return damageThroughShields
        }
    };

    $scope.attackOneWay = function (side) {
        var atkFleet;
        var defFleet;
        if (side == 'attacker') {
            atkFleet = $scope.attacker.fleet;
            defFleet = $scope.defender.fleet;
        }
        else if (side == 'defender') {
            atkFleet = $scope.attacker.fleet;
            defFleet = $scope.defender.fleet;
        }
        for (var atkUnit in atkFleet) {
            var numAtkUnit = unit.quantity;
            var crossShields;
            if (atkUnit.tech == 'ion') {
                crossShields = .5;
            }
            else {
                crossShields = .01;
            }
            while (iterator > 0) {
                var damageValue = 0;
                for( var defUnit in defFleet ) {
                    var numDefUnit = defUnit.quantity;
                    if (isNaN(defUnit.shield)) {
                        defUnit.shield = 0;
                    }
                    damageValue += calcDamagePerUnit(atkUnit.power, defUnit.shield, crossShields);
                }
                var q = 0;
                for(var unit in defFleet){
                    var numUnit = unit.quantity;
                    if (isNaN(unit.shield)) {
                        unit.shield = 0;
                    }
                    //var n = false;
                    //if (shipNames[i] > 19) n = true;

                    var totalDefArmor = numUnit * unit.armor;
                    var damagePerUnit = calcDamagePerUnit(atkUnit.power, unit.shield, crossShields);
                    var s = numAtkUnit * Math.pow(damagePerUnit,2) / damageValue;

                    //if (j) s = e / h;

//                    var u = s * k;
                    var unitsRemaining = ( totalDefArmor - s ) / unit.armor;
                    if (unitsRemaining < 0){
                        unitsRemaining = 0;
                    }
                    if ( s > totalDefArmor ) {
                        q += totalDefArmor / damagePerUnit;
                    }
                    else{
                        q += s / damagePerUnit;
                    }
                    defFleet[unit] = unitsRemaining;

                    // still confused on this part.I think its calculating the losses here.
                    //if (isUnit) {
                    //    var n = unit.size;
                    //    m = roundUp(m - Math.ceil(p), findScale(i));
                    //    if (m > 0) {
                    //        m = Math.ceil(m);
                    //        var t;
                    //        if (side == "attack") {
                    //            result[0] += m * n;
                    //            t = parseInt($("attArm").value, 10)
                    //        } else if (side == "defend") {
                    //            result[1] += m * n;
                    //            t = parseInt($("defArm").value, 10)
                    //        }
                    //        result[2] += Math.floor(m * n * (Math.floor(2 * t) / 100))
                    //    }
                    //}

                }
                numAtkUnit -= q
            }
        }
        return c
    }
}]);

//
//angular.module('2048', []).controller('gameController', function () {
//    var grid = [
//        [[4], [], [], []],
//        [[4], [], [], []],
//        [[2], [], [], []],
//        [[], [], [], []]
//    ];
//    this.score = 0;
//
//    this.getCell = function (cell) {
//        return grid[cell.y][cell.x];
//    };
//
//    this.setCell = function (cell) {
//        grid[cell.y][cell.x] = cell.val;
//    };
//
//    this.getScoreVal = function (cell) {
//        //n is the largest number cell achieved
//        switch (cell.val) {
//            case 2:
//                return 2;
//            case 4:
//                return 5;
//            case 8:
//                return 10;
//            case 16:
//                return 25;
//            case 32:
//                return 50;
//            case 64:
//                return 125;
//            case 128:
//                return 250;
//            case 256:
//                return 500;
//            case 512:
//                return 1000;
//            case 1024:
//                return 2000;
//            case 2048:
//                return 4000;
//            case 4096:
//                return 8000;
//            case 8192:
//                return 16000;
//            case 16384:
//                return 32500;
//            default:
//                return 0;
//        }
//    };
//
//    this.addScore = function (cell) {
//        $scope.score += cell;
//    };
//
//    this.slide = {
//        up: function () {
//            for (var y = 0; y < 3; y++) {
//                for (var x = 0; x < 3; x++) {
//                    //if they are equal, add them
//                    if (grid[y][x] == grid[y + 1][x]) {
//                        grid[y][x] *= 2;
//                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
//                    }
//                    //if cell before is empty slide number down
//                    else if (grid[y][x] == []) {
//                        grid[y][x] = grid[y + 1][x];
//                        grid[y + 1][x] = [];
//                    }
//
//                }
//            }
//            return true;
//        },
//        down: function () {
//            for (var y = 3; y > 0; y--) {
//                for (var x = 0; x < 3; x++) {
//                    //if they are equal, add them
//                    if (grid[y][x] == grid[y + 1][x]) {
//                        grid[y][x] *= 2;
//                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
//                    }
//                    //if cell before is empty slide number down
//                    else if (grid[y][x] == []) {
//                        grid[y][x] = grid[y + 1][x];
//                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
//                    }
//
//                }
//            }
//            return true;
//        },
//        left: function () {
//            for (var x = 0; x < 3; x++) {
//                for (var y = 0; y < 3; y++) {
//                    //if they are equal, add them
//                    if (grid[y][x] == grid[y + 1][x]) {
//                        grid[y][x] *= 2;
//                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
//                    }
//                    //if cell before is empty slide number down
//                    else if (grid[y][x] == []) {
//                        grid[y][x] = grid[y + 1][x];
//                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
//                    }
//                }
//            }
//            return true;
//        },
//        right: function () {
//            for (var x = 3; x > 0; x--) {
//                for (var y = 0; y < 3; y++) {
//                    //if they are equal, add them
//                    if (grid[y][x] == grid[y + 1][x]) {
//                        grid[y][x] *= 2;
//                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
//                    }
//                    //if cell before is empty slide number down
//                    else if (grid[y][x] == []) {
//                        grid[y][x] = grid[y + 1][x];
//                        grid[y + 1][x] = grid[y + 2][x] ? grid[y + 2][x] : [];
//                    }
//                }
//            }
//            return true;
//        }
//    };
//    //need an update board/score function
//});