var ideaCapture = angular.module('ideaCapture',['ngRoute']);

ideaCapture.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'templates/home.html',
		controller: 'modalControler'
	}).otherwise({
		templateUrl: 'templates/error.html'
	});
}]);