/**
 * Created by TheTower on 7/21/2015.
 */
var AngularDemo = angular.module('angularDemo',[]);


AngularDemo.controller('todoCtrl', ['$scope', function($scope){
    $scope.getTotalTodos = function(){
        return $scope.todos.length
    }

    $scope.todos = [{text:'Learn AngularJS', done:false},
        {text:'build an app', done:false}]

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


AngularDemo.controller('snakeCtrl', ['$scope', function($scope){
    //game control logic goes here

    $scope.score = 0;

    $scope.gameSize = 8; //sets game to an n x n board

    $scope.snake ={ pos:[[2,2],[2,3],[2,4]],
                    len:3 };//controls location of snake

    $scope.apple = [4,4];

    //create gameboard
    $scope.gameBoard = function(){
        //add in the rows
        for(var i = 0; i < $scope.gameSize; i++){$('#gameBoard').appendChild("<tr></tr>");
            for(var j=0; j<$scope.gameSize; j++){$('#gameBoard, td')[i].appendChild("<td id=" + i + "," + j +"></td>");}}}

    $scope.newGame = function(){
        //reset to base values
        $scope.score = 0;
        $scope.snake = { pos:[[2,2],[2,3],[2,4]],
            len:3 };

        //instanstiate game board()
        $scope.gameBoard();
    }
}])