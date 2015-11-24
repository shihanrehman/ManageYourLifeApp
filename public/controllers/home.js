var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('HomeCtrl', ['$scope', function ($scope) {
	console.log('homecontrollers Works');
	$scope.author = "Shihan Rehman";

	var app1 = {
		name : "Contact List App",
		desc: "Manage your contacts efficiently, never loose your contacts ever again.",
		image: "./images/contact.jpg"
	};
	var app2 = {
		name : "Todo List App",
		desc: "Make sure you get everything done in time with the a new todo list.",
		image: "./images/todo.jpg"
	};
	var app3 = {
		name : "Goals App",
		desc: "Accompishgoals that you were putting off, Start new goals. ENJOY LIFE TODAY",
		image: "./images/goals.jpg"
	};

	var applist = [app1, app2, app3];

	$scope.applist = applist;
}]);