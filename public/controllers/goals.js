var goalsControllers = angular.module('goalsControllers', []);

goalsControllers.controller('GoalsCtrl', ['$scope', '$http',
	function ($scope, $http) {
	$scope.pageName = "Goals List";

	var refresh = function () {
		$http.get('/goallist').success(function (response) {
			console.log("I got the data I requested from goallist");
			$scope.goallist = response;
			$scope.goals = '';
		});
	};

	refresh();

	$scope.addGoal = function () {
		console.log($scope.goals);
		$http.post('/goallist', $scope.goals).success(function (response) {
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function (id) {
		console.log(id);

		$http.delete('/goallist/' + id).success(function (response) {
			refresh();
		});

	};

	/* $scope.edit = function (id) {
			console.log(id);
			$http.get('/goallist/' + id).success(function (response) {
				$scope.goals = response;
			});
		};

		$scope.update = function () {
			console.log($scope.goals._id + ' UPDATED!');
			$http.put('/goallist/' + $scope.goals._id, $scope.goals);
		}; */

}]);