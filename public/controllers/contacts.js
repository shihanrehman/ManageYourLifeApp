var contactControllers = angular.module('contactControllers', []);


// Contact App Controller
contactControllers.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {

		var refresh = function () {
			$http.get('/contactlist').success(function (response) {
				$scope.contactlist = response;
				$scope.contact = "";
			});
		};

		refresh();
		

		$scope.addContact = function () {
			console.log($scope.contact);
			$http.post('/contactlist', $scope.contact).success(function (response){
				//console.log('New Contact Added: 'response);
				refresh();
			});
		};

		$scope.remove = function (id) {
			console.log(id);
			$http.delete('/contactlist/' + id).success(function (response) {
				console.log('Contact ' + response + ' Deleted')
				refresh();
			});
		};

		$scope.edit = function (id) {
			console.log(id);
			$http.get('/contactlist/' + id).success(function (response) {
				$scope.contact = response;
			});
		};

		$scope.update = function () {
			console.log($scope.contact._id + ' UPDATED!');
			$http.put('/contactlist/' + $scope.contact._id, $scope.contact);
		};

		$scope.deselect= function () {
			$scope.contact = "";
		};

}]);