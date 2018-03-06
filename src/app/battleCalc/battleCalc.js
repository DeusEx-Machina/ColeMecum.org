'use strict';

var battleCalc = angular.module('angularDemo.battleCalc', [''])






battleCalc.controller('battleCalc', ['$scope', '$http', function ($scope, $http) {
    //http://klingon.angeldsis.com/usyn/index/fetchtech?playerid=0932
    // returns {"data":{"armor":24,"laser":23,"missile":21,"plasma":15,"shield":14,"ion":13,"photon":8,"disruptor":3},"nick":"rabbit"}
    $scope.getPlayerTech = function(playerID){
        $http({
            method:'POST',
            url: 'proxy.php',
            data:{
                address: 'http://klingon.angeldsis.com/usyn/index/fetchtech?playerid=932'
            }
        }).then(function success(response){
            console.log(response)

        }, function error(response){
            console.log('Error in getting response : ', response);
        })
    };


    $scope.attacker = {
        id: 932,

        fleet:{
            fighter: 1000,
            frigate: 250
        },

        tech: {
            Armor: {name:'Armor', level:0},
            Laser: {name:'Laser', level:0},
            Missiles:{ name:'Missiles', level:0},
            Plasma:{ name:'Plasma', level:0},
            Shielding:{ name:'Shielding', level:0},
            Ion:{ name:'Ion', level:0},
            Photon:{ name:'Photon', level:0},
            Disruptor:{ name:'Disruptor', level:0},
            CommandCenter:{ name:'Command Center', level:0},
            TacticalCommander:{ name:'Tactical Commander', level:0}
        },

    }

    $scope.defender = {

        tech: {
            Armor: {name:'Armor', level:0},
            Laser: {name:'Laser', level:0},
            Missiles:{ name:'Missiles', level:0},
            Plasma:{ name:'Plasma', level:0},
            Shielding:{ name:'Shielding', level:0},
            Ion:{ name:'Ion', level:0},
            Photon:{ name:'Photon', level:0},
            Disruptor:{ name:'Disruptor', level:0},
            CommandCenter:{ name:'Command Center', level:0},
            TacticalCommander:{ name:'Tactical Commander', level:0}
        },

    }

    $scope.unitBaseValues = {
        fighter: {
            name: 'Fighter',
            key:'fighter',
            size: 5,
            x: 1,
            armor: 2,
            power: 2,
            shield: 0
        },
        bomber: {
            name: 'Bomber',
            size: 10,
            x: 2,
            power: 4,
            armor: 2,
            shield: 0
        },
        heavyBomber: {
            name: 'Heavy Bomber',
            size: 30,
            x: 3,
            power: 10,
            armor: 4,
            shield: 0
        },
        ionBomber: {
            name: 'Ion Bomber',
            size: 60,
            x: 5,
            power: 12,
            armor: 4,
            shield: 1
        },
        corvette: {
            name: 'Corvette',
            size: 20,
            x: 1,
            power: 4,
            armor: 4,
            shield: 0
        },
        recycler: {
            name: 'Recycler',
            size: 30,
            x: 1,
            power: 2,
            armor: 2,
            shield: 0
        },
        destroyer: {
            name: 'Destroyer',
            size: 40,
            x: 3,
            power: 8,
            armor: 8,
            shield: 0
        }
        ,
        frigate: {
            name: 'Frigate',
            size: 80,
            x: 2,
            power: 12,
            armor: 12,
            shield: 0
        }
        ,
        ionFrigate: {
            name: 'Ion Frigate',
            size: 120,
            x: 5,
            power: 14,
            armor: 12,
            shield: 1
        },
        scoutShip: {
            name: 'Scout Ship',
            size: 40,
            x: 1,
            power: 1,
            armor: 2,
            shield: 0
        }
        ,
        outpostShip: {
            name: 'Outpost Ship',
            size: 100,
            x: 1,
            power: 2,
            armor: 4,
            shield: 0
        }
        ,
        cruiser: {
            name: 'Cruiser',
            size: 200,
            x: 3,
            power: 24,
            armor: 24,
            shield: 2
        }
        ,
        carrier: {
            name: 'Carrier',
            size: 400,
            x: 2,
            power: 12,
            armor: 24,
            shield: 2
        }
        ,
        heavyCruiser: {
            name: 'Heavy Cruiser',
            size: 500,
            x: 3,
            power: 48,
            armor: 48,
            shield: 4
        }
        ,
        battleship: {
            name: 'Battleship',
            size: 2000,
            x: 5,
            power: 168,
            armor: 128,
            shield: 10
        }
        ,
        fleetCarrier: {
            name: 'Fleet Carrier',
            size: 2500,
            x: 5,
            power: 64,
            armor: 96,
            shield: 8
        },
        dreadnought: {
            name: 'Dreadnought',
            size: 10000,
            x: 6,
            power: 756,
            armor: 512,
            shield: 20
        }
        ,
        titan: {
            name: 'Titan',
            size: 50000,
            x: 7,
            power: 3402,
            armor: 2048,
            shield: 30
        }
        ,
        leviathan: {
            name: 'Leviathan',
            size: 200000,
            x: 6,
            power: 10000,
            armor: 6600,
            shield: 40
        }
        ,
        deathStar: {
            name: 'Death Star',
            size: 500000,
            x: 7,
            power: 25500,
            armor: 13500,
            shield: 60
        }
    };

    $scope.defenseBaseValues = {
        barracks: {
            size:0,
            x:1,
            power:4,
            armor:4,
            shield:0
        },
        laserTurret:{
            size:0,
            x:1,
            power:8,
            armor:8,
            shield:0
        },
        missileTurret:{
            size:0,
            x:2,
            power:16,
            armor:16,
            shield:0
        },
        plasmaTurret:{
            size:0,
            x:3,
            power:24,
            armor:24,
            shield:0
        },
        ionTurret:{
            size:0,
            x:5,
            power:32,
            armor:32,
            shield:2
        },
        photonTurret:{
            size:0,
            x:6,
            power:64,
            armor:64,
            shield:6
        },
        disruptorTurret:{
            size:0,
            x:7,
            power:256,
            armor:256,
            shield:8
        },
        deflectionShields:{
            size:0,
            x:5,
            power:2,
            armor:512,
            shield:16
        },
        planetaryShield:{
            size:0,
            x:5,
            power:4,
            armor:2048,
            shield:20
        },
        planetaryRing:{
            size:0,
            x:6,
            power:2048,
            armor:1024,
            shield:12
        }
    };

    $scope.calcMultiplier = function(tech){
        return tech.level * 5 + "%";
    };

    $scope.getPowerArmorShield = function(unit){

    }
}]);

