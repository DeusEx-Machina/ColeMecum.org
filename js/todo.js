/**
 * Created by TheTower on 7/21/2015.
 */
function TodoCtrl($scope){
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
}