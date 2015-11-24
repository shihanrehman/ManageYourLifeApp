var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('TodoCtrl', ['$scope', '$http',
	function ($scope, $http) {
	$scope.pageName = "Todo List";

	var refresh = function () {
		$http.get('/todolist').success(function (response) {
			console.log("I got the data i requested from todolist");
			$scope.todolist = response;
			$scope.todos = '';
		});
	};

	refresh();

	$scope.addTodo = function () {
		console.log($scope.todos);
		$http.post('/todolist', $scope.todos).success(function (response) {
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function (id) {
		console.log(id);

		$http.delete('/todolist/' + id).success(function (response) {
			refresh();
		});

	};

	/* $scope.edit = function (id) {
		console.log(id);
		$http.get('/todolist' + id).success(function (response) {
			$scope.todos = response;
		});
	};

	$scope.update = function (id) {
		console.log(id);
		$http.put('/todolist' + $scope.todos._id, $scope.todos);
	}; */

}]);