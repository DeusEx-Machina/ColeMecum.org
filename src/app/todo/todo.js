var todo = angular.module('angularDemo.todo', [''])


//controller for the To-do widget view
todo.controller('todoCtrl', [
	'$scope',
	function ($scope) {
		$scope.getTotalTodos = function () {
			return $scope.todos.length
		};

		$scope.todos = [
			{text: "make a website", done: true},
			{text: 'Learn AngularJS', done: true},
			{text: 'build an app', done: true},
			{text: "make money off said app", done: false}
		];

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
	}
]);
