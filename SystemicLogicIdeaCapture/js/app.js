var ideaCapture = angular.module('ideaCapture',['ngRoute']);

ideaCapture.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'templates/home.html',
		controller: 'modalControler'
	}).when('/form',{
		templateUrl: 'templates/form.html',
		controller: 'formController'
	})
	.otherwise({
		templateUrl: 'templates/error.html'
	});
}]);