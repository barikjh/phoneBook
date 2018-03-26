
var app = angular.module('app', ['ngRoute','mdo-angular-cryptography']);

app.config(['$routeProvider' ,'$cryptoProvider', function($routeProvider,$cryptoProvider) {
	//$cryptoProvider.setAesKey('ABCD123');
	$cryptoProvider.setCryptographyKey('ABCD123');
    $routeProvider	
    .when('/', {templateUrl: "views/phoneBook.html", controller: 'phoneBookCtrl'}) 
    .when('/phone-book',{templateUrl:"views/phoneBook.html", controller:'phoneBookCtrl'})
	.when('/addContact/:contact_id',{templateUrl:"views/addContact.html", controller :'addContactCtrl'})
	.when('/viewContact/:contact_id',{templateUrl:"views/viewContact.html", controller :'viewContactCtrl'})
    .otherwise({redirectTo: 'views/phoneBook.html'});
  }]);
  
 
 