var managerApp = angular.module('managerApp', [
	'ngRoute',
	'homeControllers',
	'contactControllers',
	'todoControllers',
	'goalsControllers'
	]);

managerApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	console.log('Routes Work');
	$routeProvider.
	when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	}).when('/contacts', {
		templateUrl: 'views/contacts.html',
		controller: 'ContactCtrl'
	}).when('/todo', {
		templateUrl: 'views/todo.html',
		controller: 'TodoCtrl'
	}).when('/goals', {
		templateUrl: 'views/goals.html',
		controller: 'GoalsCtrl'
	});

	$locationProvider.html5Mode(false).hashPrefix('!');
}]);